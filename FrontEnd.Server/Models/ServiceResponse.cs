using System.Net;

namespace Backend.Models
{
    //Serviço responsável por abstrair os resultados das requisições (sucesso ou erro)
    //Classe que pode receber qualquer tipo de objeto <T>
    public class ServiceResponse<T>
    {
        public T? Dados { get; set; } //Dados da entidade produto
        public string Mensagem { get; set; } = string.Empty;
        public bool Sucesso { get; set; } = true;
        public HttpStatusCode? StatusCode { get; set; }
        public DateTime Data { get; set; } = DateTime.Now.ToLocalTime();
    }
}