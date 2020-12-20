<h3 align="center">
  <img src="https://user-images.githubusercontent.com/45200253/102722946-67b72f80-42e3-11eb-9247-c44046d2742c.png" width=500 height=200 />
</h3>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-iniciando-o-projeto">Iniciando o projeto</a>&nbsp;&nbsp;&nbsp;
</p>

## 👨🏻‍💻 Sobre o projeto

- O sistema consiste em uma aplicação web para divulgação de eventos, cujos dados devem ser consumidos em uma api feito em NodeJS. Dentre as funcionalidades principais estão: Criação, edição, listagem e remoção de eventos e categorias; fluxo de autenticação.

## 💻 Iniciando o projeto
- Backend
```bash
# 1º - Clone o projeto: 
$ git clone https://github.com/PedroGomes1/softaliza.git

# 2º - Entre na pasta softaliza, e logo após a pasta backend

# 3º - Instale todas dependências rodando o comando no terminal:
$  yarn

# 4º - Crie uma database com o nome events-api (Com o banco de dados PostgreSQL)

# 5º - Copie as variáveis do arquivo .env.example e crie um novo arquivo .env e preencha as variáveis com suas devidas configurações do banco de dados. Obs: Para preencher o APP_SECRET, pode-se preencher gerando um hash com um nome qualquer através desse site: https://www.md5hashgenerator.com/

# 6º - Rode o seguinte comando no terminal:
$ yarn typeorm migration:run

# 7º - Rode o seguinte comando para iniciar o servidor:
$ yarn dev:server
```

- Frontend
```bash
# Entre na pasta frontend e instale todas as dependências
$ yarn

# Inicie a aplicação
$ yarn start

```

Feito por Pedro Gomes 👋 [Meu Linkedin](https://www.linkedin.com/in/pedro-henrique-gomes-barbosa-667766178/)
