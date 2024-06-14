
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.DataContext
{
    //Camada responsável por especificar quais models deverão ser instanciadas no db
    public class ApplicationDbContext : DbContext
    {
        //Construtor necessário para iniciliar a classe e os seus métodos
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        //Método responsável por criar a tabela no banco de dados, com base no modelo de classe informado
        public DbSet<ProdutoModel> Produtos { get; set; }
    }
}