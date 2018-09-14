# api-ebooks
API REST em NodeJS utilizando Restify e Knexjs

Para testar o projeto:
---------------------- 

### Clone o repositório
`$ git clone https://github.com/Rodr1go/api-ebooks.git`

### Entre no diretório do projeto
`$ cd api-ebooks`

### Instale as dependências
`$ npm install`

### Crie o banco de dados e uma tabela seguindo a estrutura mostrada abaixo:

ebook
----------

|campo    | tipo       |
|---------|------------|
|id       | int(11)    | 
|descricao| varchar(45)|
|autor    | varchar(45)|
|editora  | varchar(45)|

### Configure o arquivo .env.example   
* Renomeie para .env 
* Edite com as informações de conexão com o banco de dados

### Inicie a aplicação
`$ npm start`


