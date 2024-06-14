using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class RequisicaoBuscaPaginadaModel
    {
        public int paginaAtual { get; set; }
        [Range(10, 100, ErrorMessage = "O campo ItensPorPagina deve estar entre 10 e 100.")]
        public int itensPorPagina { get; set; }
    }
}