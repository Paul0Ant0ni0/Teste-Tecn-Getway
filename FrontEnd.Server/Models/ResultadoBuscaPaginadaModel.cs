namespace Backend.Models
{
    public class ResultadoBuscaPaginadaModel
    {
        public int paginaAtual { get; set; }

        public int totalItens { get; set; }
        public int totalPaginas { get; set; }
    }
}