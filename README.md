<h1 align="center">Politica para Todos</h1>

Acesse em: Em breve...

## Índice

* [1. Projeto](#1-projeto)
* [2. Montagem do ambiente de desenvolvimento](#2-montagem-do-ambiente-de-desenvolvimento)
* [3. Implementações Futuras e Melhorias](#3-implementações-futuras-e-melhorias)

## 1. Projeto

O projeto consistem em:

- Fazer parte do projeto de conclusão do MBA da XPE Edução em front end :heavy_check_mark:
- Propor que assuntos relacionados a politica (pesquisa, escolha) seja liberado para todos os usuários interessados de forma rápida, direto da fonte, sem interfarencias de possíveis fake news :heavy_check_mark:
- Página de Consulta: Página simples para pesquisar com o nome do politico que quiser, trará uma lista de politicos relacionado com o nome pesquisado :heavy_check_mark:
- Página de Detalhes: Página simples para ver informações do politico que quiser, trará diversos assuntos relacionado ao politico como, eventos, discursos, despesas e etc :heavy_check_mark:
- Readme (documentação) :heavy_check_mark:

## 2. Montagem do ambiente de desenvolvimento

> :warning: Será necessária a utilização:

Projeto desenvolvido com React.Js + JavaScript + Material UI

* [Node.js](https://nodejs.org/) que contém o [npm](https://docs.npmjs.com/) para instalação das dependências.

* Faça o clone do projeto:

``` sh
git https://github.com/jessicamelise/politica-para-todos.git
```

* Instale as dependências do projeto com o comando:

``` sh
npm install
```

* secrets Config no repositório
  :warning: Caso tenha interesse em manter e evoluir seu projeto clonado, o mesmo tem um workflow configurado no gitlab actions que faz o deploy automático no gh pages e para ele funcionar será necessario setar as secrets abaixo no seu repositório:

``` js
ACTIONS_DEPLOY_ACCESS_TOKEN={token gerado no personal tokens aqui no github}
USER_EMAIL={email}
USER_NAME={name}
```

* Localhost:

``` sh
npm start
```

* Testes

```sh
npm run test
```

```sh
npm run test -- --coverage .
```

* Deploy e Build

Está automático pelo workflow do github actions
[https://github.com/jessicamelise/politica-para-todos/actions](https://github.com/jessicamelise/politica-para-todos/actions)

## 3. Implementações Futuras e Melhorias

* Ter uma área para salvar / deixar favoritado deputados que tenho interesse
* Criar uma conta e logar na aplicação e conseguir acessar meus favoritos
* Colocar máscara de Data e Hora nas exibições
* Resolver problema de CORS e disponibilizar o app para outras pessoas 
* Melhorar a cobertura de testes;