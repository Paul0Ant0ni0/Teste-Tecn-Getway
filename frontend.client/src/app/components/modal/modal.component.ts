import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../Models/produtos';
import { StatusEnum } from '../../Enums/StatusEnums';
import { CategoriaEnum } from '../../Enums/CategoriaEnums';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produto) { }

  public campoStatus: StatusEnum[] = Object.values(StatusEnum);
  public categorias: CategoriaEnum[] = Object.values(CategoriaEnum);
  public titulo: string = (this.produto?.id != undefined && this.produto.id > 0) ? "EDITAR PRODUTO" : "CADASTRAR PRODUTO";
  public produtoInitializar: Produto = {
    id: 0,
    nome: "",
    categoria: CategoriaEnum.Acessorios,
    descricao: "",
    preco: 0.00,
    quantidade: 0,
    status: StatusEnum.INDISPONIVEL,
    dataDeCriacao: new Date()

  }
  ngOnInit(): void {
    if (this.produto != undefined) {
      this.produtoInitializar = { ...this.produto };
    }
  }

  public close(): void {
    this.dialogRef.close();
  }


  public execute(form: NgForm): void {
    if (form.valid) {
      this.dialogRef.close(this.produtoInitializar); // Passa os dados ao fechar
    }
  }

}
