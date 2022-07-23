<div align='center'>

# API REST de lembretes

Uma API simples baseada no DDD (`domain-driven-design`) pronta para produção de lembretes com auth

![GitHub](https://img.shields.io/github/license/JeanMenezees/lembrete-api?color=purple)

</div>

## Tecnologias

- NestJS
- Typescript
- TypeORM
- Sqlite3
- Docker

## Features

- Autenticação de usuário
- Proteção de rotas com `Authorization Bearer`
- CRUD de lembretes

## Rodando com docker

Build da imagem:

```
$ docker compose build
```

Para subir a imagem:

```
$ docker compose up nest-project
```

## Swagger

Após a aplicação rodar no container, já será possível acessar o swagger documentado da API via `http://localhost:3000/#api`

## Feature de observação

- Logger básico

## Libs auxiliares

- husky
- eslint
- lint-staged
