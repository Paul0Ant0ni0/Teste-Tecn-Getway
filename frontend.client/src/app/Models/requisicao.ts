export interface RequisicaoBuscaPaginadaModel {
  paginaAtual: number;
  itensPorPagina: number;
}

export interface RequisicaoBuscaProdutosModel {
  paginacao: RequisicaoBuscaPaginadaModel;
  filtroId: number;
  filtroNome: string;
}
