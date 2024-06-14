
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Produto } from './Models/produtos';
import { ProdutoService } from './services/produto.service';
import { CategoriaEnum } from './Enums/CategoriaEnums';
import { StatusEnum } from './Enums/StatusEnums';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { RequisicaoBuscaPaginadaModel, RequisicaoBuscaProdutosModel } from './Models/requisicao';
import { ServiceResponse } from './Models/serviceResponse';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from './services/notification.service';
import { CardInfo } from './Models/cardInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource!: MatTableDataSource<Produto>;
  public formBuscProdutos!: FormGroup;
  public campoStatus: StatusEnum[] = Object.values(StatusEnum);
  public categorias: CategoriaEnum[] = Object.values(CategoriaEnum);

  public produto!: Produto;
  public panelOpenState: boolean = false;
  public displayedColumns: string[] = ['Id', 'Nome', 'Categoria', 'Quantidade', 'Preco', 'Status', 'Editar', 'Excluir'];
  public produtos!: MatTableDataSource<Produto>;
  public produtosOriginais!: Produto[];
  public produtosFiltrados!: Produto[];

  public reqProd!: RequisicaoBuscaProdutosModel;
  public reqPag!: RequisicaoBuscaPaginadaModel;

  public cards: CardInfo[] = []
   


  constructor(
    private modal: MatDialog,
    private ProdutoService: ProdutoService,
    private notification: NotificationService,
    private formBuilder: FormBuilder
  ) {

    this.formBuscProdutos = this.formBuilder.group({
      pesquisar: [''], 
      categoria: [''], 
      status: [''],   
      filtroPorId: [''], 
      quantidade: ['']  
    });
  }
    

  ngOnInit(): void {
   this.getAllProdutos();
  }

  public getAllProdutos(): void {

    this.ProdutoService.findAll().subscribe((req: ServiceResponse) => {
      if (req.dados != undefined && req.dados != null && req.dados! instanceof Array) {
        this.produtos = new MatTableDataSource(req.dados);
        this.produtos.paginator = this.paginator;
        const total: number = this.produtos.data.reduce((num, produto) => num + produto.preco, 0);
        const quantidade: number = this.produtos.data.reduce((num, produto) => num + produto.quantidade, 0);
        this.cards = [
          { icon: 'price_change', titulo: 'VALOR TOTAL', valor: `R$ ${total.toFixed(2)}` },
          { icon: 'equalizer', titulo: 'QUANTIDADE TOTAL', valor: `${quantidade}` },
          { icon: 'date_range', titulo: 'PERÍODO', valor: `0${new Date().getMonth() + 1}/${new Date().getFullYear()}` }
        ];
        
      }
    });
  }



  public createProduto(): void {
    const dialogConfig = new MatDialogConfig();

 
    dialogConfig.disableClose = true; // Desativa o fechamento automático
    dialogConfig.data = undefined;
    const dialogRef = this.modal.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((produtoModal: Produto) => {
      if (produtoModal.id == 0 && produtoModal != undefined) {
        this.ProdutoService.create(produtoModal).subscribe((resp: ServiceResponse) => {
          if (resp.dados != undefined && resp.dados != null && resp.dados! instanceof Array) {
            this.notification.showSuccess("Criado com sucesso!", "success");
            this.produtos = new MatTableDataSource(resp.dados);
            this.produtos.paginator = this.paginator; 
          }


        })
      }
 
    });
  }

  public editProduto(produto: Produto): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = produto;
    dialogConfig.disableClose = true; // Desativa o fechamento automático
    const dialogRef = this.modal.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((produtoModal: Produto) => {
     
      if (produtoModal) {
        produtoModal.dataDeAlteracao = new Date();
          this.ProdutoService.update(produtoModal).subscribe(() => {
          this.notification.showSuccess("Editado com sucesso!", "success");
            this.getAllProdutos();
          }
        );
      }
    });
  }


  public deleteProduto(id: number): void {
    this.notification.dialog().then(isConfirmed => {
      if (isConfirmed) {
        this.ProdutoService.delete(id).subscribe((resp: ServiceResponse) => {
          this.getAllProdutos();
          this.notification.showSuccess("Deletado com sucesso!", "success");

        });
        
      }
    });
   
  }

  public reset(): void {
    this.formBuscProdutos.reset();
     this.getAllProdutos();
    
  }


  public pesquisar(): void {
    const { pesquisar, categoria, status, filtroPorId, quantidade } = this.formBuscProdutos.value;

 
    if (!this.produtosOriginais) {
      this.produtosOriginais = this.produtos.data.slice(); 
    }

    this.produtosFiltrados = this.produtosOriginais.filter(produto => {
      return (!pesquisar || produto.nome.includes(pesquisar)) &&
        (!categoria || produto.categoria === categoria) &&
        (!status || produto.status === status) &&
        (!filtroPorId || produto.id === parseInt(filtroPorId, 10)) &&
        (!quantidade || produto.quantidade === parseInt(quantidade, 10));
    });

   
    this.produtos.data = this.produtosFiltrados;
    this.produtos.paginator = this.paginator;
    this.paginator.firstPage();
  }
  title = 'Teste Angular';
}


