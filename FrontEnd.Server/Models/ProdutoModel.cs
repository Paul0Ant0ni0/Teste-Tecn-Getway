using Backend.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models

//Entidade para criação da tabela no banco de dados
{
    public class ProdutoModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório.")]
        [StringLength(40, ErrorMessage = "O campo Nome deve ter no máximo {1} caracteres.")]
        public required string Nome { get; set; }

        [Required(ErrorMessage = "O campo Quantidade é obrigatório.")]
        public int Quantidade { get; set; }

        [Required(ErrorMessage = "O campo Preço é obrigatório.")]
        [Column(TypeName = "decimal(8,2)")]
        public decimal Preco { get; set; }
        public string? Descricao { get; set; }

        [Required(ErrorMessage = "O campo Categoria é obrigatório.")]
        public CategoriaEnum Categoria { get; set; }

        [Required(ErrorMessage = "O campo Status é obrigatório.")]
        public StatusEnum Status { get; set; }

        public string? ImagemUrl { get; set; }

        public DateTime DataDeCriacao { get; set; } = DateTime.Now.ToLocalTime();

        public DateTime DataDeAlteracao { get; set; } = DateTime.Now.ToLocalTime();

    }
}