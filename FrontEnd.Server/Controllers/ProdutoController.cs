using Backend.DataContext;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers

//Camada responsável pelas requisições/endpoints http
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public ProdutoController(ApplicationDbContext context)
        {
            _context = context;
        }



        [HttpPost("salvarProduto")]
        public async Task<ActionResult<ServiceResponse<ProdutoModel>>> CreateProduto(ProdutoModel novoProduto)
        {
            ServiceResponse<List<ProdutoModel>> serviceResponse = new ServiceResponse<List<ProdutoModel>>();

            try
            {
                if (!ModelState.IsValid)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Dados inválidos!";
                    serviceResponse.Sucesso = false;
                    serviceResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    return BadRequest(serviceResponse);
                }

                novoProduto.DataDeCriacao = DateTime.Now.ToLocalTime();
                novoProduto.DataDeAlteracao = DateTime.Now.ToLocalTime();

                _context.Add(novoProduto);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Produtos.ToList();
                serviceResponse.Mensagem = "Produto criado com sucesso!";
                serviceResponse.Sucesso = true;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            return Ok(serviceResponse);
        }



        [HttpPut("editarProduto/{id}")]
        public async Task<ActionResult<ServiceResponse<ProdutoModel>>> UpdateProduto(ProdutoModel editadoProduto, int id)
        {
            ServiceResponse<List<ProdutoModel>> serviceResponse = new ServiceResponse<List<ProdutoModel>>();

            try
            {
                
                ProdutoModel produtoEncontrado = _context.Produtos.AsNoTracking().FirstOrDefault(x => x.Id == id);

                if (produtoEncontrado == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Produto não localizado!";
                    serviceResponse.Sucesso = false;
                    serviceResponse.StatusCode = System.Net.HttpStatusCode.NotFound;
                    return BadRequest(serviceResponse);

                }

                if (!ModelState.IsValid)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Dados inválidos!";
                    serviceResponse.Sucesso = false;
                    serviceResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    return BadRequest(serviceResponse);
                }

                produtoEncontrado = editadoProduto;

                produtoEncontrado.DataDeAlteracao = DateTime.Now.ToLocalTime();

                _context.Produtos.Update(produtoEncontrado);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Produtos.ToList();
                serviceResponse.Mensagem = "Produto atualizado com sucesso!";
                serviceResponse.Sucesso = true;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.OK;

            }
            catch (Exception ex)
            {

                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            return Ok(serviceResponse);
        }





        [HttpGet("buscarProdutos")]
        public async Task<ActionResult<ServiceResponse<ProdutoModel>>> getAll()
        {
            ServiceResponse<List<ProdutoModel>> serviceResponse = new ServiceResponse<List<ProdutoModel>>();

            try
            {

                serviceResponse.Dados = _context.Produtos.ToList();
                serviceResponse.Mensagem = "Produto consultado com sucesso!";
                serviceResponse.Sucesso = true;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            return Ok(serviceResponse);
        }

        /*public ActionResult<ResultadoBuscaProdutosModel> GetAllProdutos(RequisicaoBuscaProdutosModel request)
        {
            try
            {
                if (request.paginacao.paginaAtual < 0)
                {
                    return BadRequest(new { message = "A página atual deve ser um valor positivo." });
                }

                if (request.paginacao.itensPorPagina <= 0)
                {
                    return BadRequest(new { message = "O número de itens por página deve ser um valor positivo." });
                }

                // Obtendo todos os produtos na base de dados
                var produtosEncontrados = _context.Produtos.AsQueryable();

                // Aplicando filtros
                if (request.filtroId > 0)
                {
                    produtosEncontrados = produtosEncontrados.Where(p => p.Id == request.filtroId);
                }

                if (!string.IsNullOrWhiteSpace(request.filtroNome))
                {
                    produtosEncontrados = produtosEncontrados.Where(p => p.Nome.Contains(request.filtroNome));
                }

                // Capturando o total de Itens após o filtro
                int totalItens = produtosEncontrados.Count();

                // Calcular total de páginas
                var totalPaginas = (int)Math.Ceiling((double)totalItens / request.paginacao.itensPorPagina);

                // Obtendo os itens da página atual
                var produtos = produtosEncontrados
                    .Skip((request.paginacao.paginaAtual - 1) * request.paginacao.itensPorPagina)
                    .Take(request.paginacao.itensPorPagina)
                    .Select(p => new ProdutoModel
                    {
                        Id = p.Id,
                        Nome = p.Nome,
                        Quantidade = p.Quantidade,
                        Preco = p.Preco,
                        Descricao = p.Descricao,
                        Categoria = p.Categoria,
                        Status = p.Status,
                        ImagemUrl = p.ImagemUrl
                    })
                    .ToList();

                var paginacao = new ResultadoBuscaPaginadaModel
                {
                    paginaAtual = request.paginacao.paginaAtual,
                    totalItens = totalItens,
                    totalPaginas = totalPaginas
                };

                var resultado = new ResultadoBuscaProdutosModel
                {
                    paginacao = paginacao,
                    itens = produtos
                };

                return Ok(resultado);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
    */


        [HttpGet("obterProduto/{id}")]

        public ActionResult<ServiceResponse<ProdutoModel>> GetProdutoById(int id)
        {
            ServiceResponse<ProdutoModel> serviceResponse = new ServiceResponse<ProdutoModel>();
            try
            {
                ProdutoModel produto = _context.Produtos.FirstOrDefault(x => x.Id == id);

                if (produto == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Produto não localizado!";
                    serviceResponse.Sucesso = false;
                    serviceResponse.StatusCode = System.Net.HttpStatusCode.NotFound;
                    return NotFound(serviceResponse);

                }
                serviceResponse.Dados = produto;
                serviceResponse.Mensagem = "Produto localizado com sucesso!";
                serviceResponse.Sucesso = true;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.OK;

            }
            catch (Exception ex)
            {

                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            return Ok(serviceResponse);
        }



        [HttpDelete("excluirProduto/{id}")]

        public async Task<ActionResult<ServiceResponse<ProdutoModel>>> DeleteProduto(int id)
        {
            ServiceResponse<List<ProdutoModel>> serviceResponse = new ServiceResponse<List<ProdutoModel>>();
            try
            {
                ProdutoModel produto = _context.Produtos.FirstOrDefault(x => x.Id == id);

                if (produto == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Produto não localizado!";
                    serviceResponse.Sucesso = false;
                    serviceResponse.StatusCode = System.Net.HttpStatusCode.NotFound;
                    return NotFound(serviceResponse);

                }
                _context.Produtos.Remove(produto);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = null;
                serviceResponse.Mensagem = "Produto deletado com sucesso!";
                serviceResponse.Sucesso = true;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception ex)
            {

                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
                serviceResponse.StatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            return Ok(serviceResponse);
        }

    }
}
