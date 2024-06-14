import { Produto } from "./produtos";

export interface ResultadoBuscaPaginadaModel {
  paginaAtual: number;
  totalItens: number;
  totalPaginas: number;
}

export interface ResultadoBuscaProdutosModel {
  paginacao: ResultadoBuscaPaginadaModel;
  itens: Produto[];
}
