Gerenciador de Tarefas

Este projeto é uma aplicação web de gerenciamento de tarefas, composta por um backend em formato de API REST e um frontend web. O sistema permite que usuários se cadastrem, façam login e gerenciem suas tarefas de forma individual.

Funcionalidades

Cadastro de usuários

Login com autenticação

Criação de tarefas

Listagem de tarefas

Edição de tarefas

Exclusão de tarefas

Tarefas associadas ao usuário autenticado

Tecnologias Utilizadas
Backend

Node.js

Express

JWT para autenticação

bcrypt para criptografia de senhas

dotenv para variáveis de ambiente

Frontend

HTML

CSS

JavaScript

Estrutura do Projeto
API_TAREFAS/
FRONT_END_TAREFAS/

Como Executar o Projeto
Backend

Acesse a pasta da API:

cd API_TAREFAS


Instale as dependências:

npm install


Configure o arquivo .env com as variáveis necessárias (porta, banco de dados e chave JWT).

Inicie o servidor:

npm start


A API ficará disponível em http://localhost:3000.

Frontend

Acesse a pasta do frontend:

cd FRONT_END_TAREFAS


Abra o arquivo index.html no navegador ou utilize um servidor local.

Autenticação

O sistema utiliza autenticação via token JWT. Após o login, o token é utilizado para acessar as rotas protegidas da API.

Objetivo do Projeto

Projeto desenvolvido com o objetivo de praticar conceitos de API REST, autenticação de usuários, integração entre frontend e backend e operações CRUD.
