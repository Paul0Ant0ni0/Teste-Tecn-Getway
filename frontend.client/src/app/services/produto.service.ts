import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Produto } from '../Models/produtos';
import { API_CONFIG } from '../config/api.config';
import { NotificationService } from './notification.service';
import { RequisicaoBuscaProdutosModel } from '../Models/requisicao';
import { ResultadoBuscaProdutosModel } from '../Models/Resultado';
import { ServiceResponse } from '../Models/serviceResponse';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient,
    private notification: NotificationService
  ) { }

  public findAll(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${API_CONFIG.baseUrl}/buscarProdutos`).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao buscar dados os produtos.");
        console.error(error);
        return EMPTY;
      })
    );
  }


  public findById(id: string): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${API_CONFIG.baseUrl}/obterProduto/${id}`).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao buscar dados de produto");
        console.error(error);
        return EMPTY;
      })
    );
  }


  public create(produto: Produto): Observable<ServiceResponse> {
    return this.http.post<ServiceResponse>(`${API_CONFIG.baseUrl}/salvarProduto`, produto).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao criar novo produto.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<ServiceResponse> {
    return this.http.delete<ServiceResponse>(`${API_CONFIG.baseUrl}/excluirProduto/${id}`).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao excluir o produto.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(produto: Produto): Observable<ServiceResponse> {
    return this.http.put<ServiceResponse>(`${API_CONFIG.baseUrl}/editarProduto/${produto.id}`, produto).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao editar o produto.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}


