# ## Gestão de Cadastro de Produtos - Backend e FrontEnd

Este repositório contém duas aplicações desenvolvidas como parte de um teste técnico para a Getway Automação Comercial. O projeto consiste em uma aplicação web frontend utilizando Angular e uma API backend utilizando ASP.NET Core para gestão de cadastro de produtos.

### FrontEnd

A aplicação frontend foi desenvolvida em Angular para fornecer uma interface de usuário amigável e responsiva para gestão de produtos. Utiliza Angular Material para construção da interface e integra-se com a API REST do backend para realizar operações CRUD (Create, Read, Update, Delete) de produtos.

### Funcionalidades do FrontEnd

- **Listagem de Produtos**
  - Busca de produtos por ID e Nome.
  - Tabela paginada exibindo os resultados da busca.

- **Cadastro e Alteração de Produtos**
  - Modal reutilizável para inserção e edição de produtos.
  - Validação dos campos de entrada conforme exigências da API.
  - Feedback de sucesso ou erro após a operação.

- **Exclusão de Produtos**
  - Confirmação de exclusão utilizando um componente de DIALOG.

### Bibliotecas Utilizadas

- **Angular Material**: Utilizado para construção da interface do usuário, incluindo componentes como tabelas paginadas e modais.
- **SweetAlert2**: Utilizado para exibição de alertas customizados, como confirmações de exclusão.

### Prototipagem no Figma

Telas prototipadas

<img src="https://github.com/Paul0Ant0ni0/Teste-Tecn-Getway/assets/96313008/9e98da41-5c87-499c-ac68-4b1cf7371fc5" alt="Pag - Home Sem Filtro" width="400" height="auto">
<img src="https://github.com/Paul0Ant0ni0/Teste-Tecn-Getway/assets/96313008/dc55eedc-905c-44ff-8202-e07135e8f8c8" alt="Modal - Editar" width="400" height="auto">
<img src="https://github.com/Paul0Ant0ni0/Teste-Tecn-Getway/assets/96313008/cc1cb40e-0df9-43fd-be21-570c88d9c8dc" alt="Modal - Cadastrar" width="400" height="auto">
<img src="https://github.com/Paul0Ant0ni0/Teste-Tecn-Getway/assets/96313008/825c7ee1-7af4-4622-aeac-27f79d637508" alt="Pag - Home Com filtro" width="400" height="auto">

## BackEnd

A aplicação backend consiste em uma Web API ASP.NET Core que fornece endpoints RESTful para gerenciar operações de produtos no banco de dados SQL Server. Utiliza Entity Framework Core para acesso aos dados, permitindo operações eficientes de consulta, inserção, atualização e exclusão de registros de produtos.

### Funcionalidades do BackEnd

#### Endpoints da API

- **POST `/api/produto/salvarProduto`**: Cria um novo produto no banco de dados.
- **PUT `/api/produto/editarProduto/{id}`**: Atualiza um produto existente com base no ID fornecido.
- **GET `/api/produto/buscarProdutos`**: Retorna todos os produtos cadastrados no banco de dados.
- **GET `/api/produto/obterProduto/{id}`**: Obtém um produto específico pelo ID.
- **DELETE `/api/produto/excluirProduto/{id}`**: Exclui um produto do banco de dados pelo ID.

### Configuração do Banco de Dados

Para configurar a conexão com o banco de dados SQL Server, adicione a string de conexão no arquivo `appsettings.Development.json`:

```
{
  "ConnectionStrings": {
    "DefaultConnection": "sua-string-de-conexao-aqui"
  }
}
```
## Recursos Adicionais

### Vídeos Recomendados

- [Introdução ao Angular Material](https://youtu.be/VL7Gq9bw7wc?si=UBsU1AHuQaikzW7N)
- [SweetAlert2 para Mensagens Personalizadas](https://youtu.be/AqmghDyWCLU?si=utXgQsgSXWeV6_4k)
- [ASP.NET Core Web API](https://youtu.be/QOXiRS1yWhE?si=O0rMSN-fblkvZ8RL)

### Referências de Estudo

- [C# e Orientação a Objetos - Caelum](https://github.com/free-educa/books/blob/main/books/C%23%20e%20Orienta%C3%A7%C3%A3o%20a%20Objetos%20-%20Caelum%2C%20FN-13.pdf)
- [Notas sobre o DotNET Framework para Profissionais](https://github.com/free-educa/books/blob/main/books/DotNETFrameworkNotesForProfessionals.pdf)
