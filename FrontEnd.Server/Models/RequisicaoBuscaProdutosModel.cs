using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class RequisicaoBuscaProdutosModel
    {
        public RequisicaoBuscaPaginadaModel paginacao { get; set; }
        [Required]
        public required int filtroId { get; set; }
        [Required]
        public required string filtroNome { get; set; }
    }
}