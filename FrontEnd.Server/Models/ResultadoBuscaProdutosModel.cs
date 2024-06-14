
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class ResultadoBuscaProdutosModel
    {
        public required ResultadoBuscaPaginadaModel paginacao { get; set; }
        [Required]
        public List<ProdutoModel> itens { get; set; }
    }
}

