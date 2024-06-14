import { Produto } from "./produtos";

interface ResultadoBuscaPaginadaModel {
  paginaAtual: number;
  totalItens: number;
  totalPaginas: number;
}

interface ResultadoBuscaProdutosModel {
  paginacao: ResultadoBuscaPaginadaModel;
  itens: Produto[];
}
