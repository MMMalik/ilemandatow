# Contributing to this repository

## Getting started

Before you begin:

- Please read this file
- Please read all README files, including package-specific READMEs.

## Packages

The app is made of the following packages:

| Package                             | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| [@ilemandatow/api][api-pkg]         | Headless CMS & Graphql API                  |
| [@ilemandatow/client][client-pkg]   | Client tools for GraphQL API                |
| [@ilemandatow/locales][locales-pkg] | Language specific settings and translations |
| [@ilemandatow/seats][seats-pkg]     | Library for calculating election results    |
| [@ilemandatow/site][site-pkg]       | Main website                                |
| [@ilemandatow/ui][ui-pkg]           | Pure UI components                          |

## Scripts

| Command                | Description                                                    | Requirements                 |
| ---------------------- | -------------------------------------------------------------- | ---------------------------- |
| `build:api:codegen`    | Generates code from running GQL API, e.g. introspection schema | Running API (dev only)       |
| `build:api:keystone`   | Builds KeystonJS app assets (production)                       | Running PostgreSQL database  |
| `build:api`            | Compiles source code for `api` package                         |                              |
| `build:client:codegen` | Generates code from running API for clients, e.g. TS types     | Running API (dev only)       |
| `build:client`         | Compiles source code for `client` package                      |                              |
| `build:seats`          | Compiles source code for `seats` package                       |                              |
| `build:site`           | Builds Gatsby site (production)                                | Running API                  |
| `build:ui`             | Compiles source code for `ui` package                          |                              |
| `build`                | Runs all `build:{pkg}` commands                                | Running API                  |
| `check-types`          | Runs TS for each package without emitting code                 |                              |
| `clean`                | Cleans build folder for each package                           |                              |
| `db:backup:cleanup`    | Cleans database backup files                                   |                              |
| `db:backup`            | Backups database                                               | Running PostgreSQL database  |
| `db:migrate:make`      | Creates migration file for database                            |                              |
| `db:migrate:down`      | Rollbacks last migration                                       | Running PostgreSQL database  |
| `db:migrate:latest`    | Runs all recent migrations                                     | Running PostgreSQL database  |
| `db:migrate:up`        | Runs one migration                                             | Running PostgreSQL database  |
| `db:restore`           | Restores database from latest backup                           | Running PostgreSQL database  |
| `db:seed`              | Seeds database with init data                                  | Running PostgreSQL database  |
| `db:setup`             | Creates init structure of databse                              | Running PostgreSQL database  |
| `develop:api`          | Runs API server in dev mode                                    | Running PostgreSQL database  |
| `develop:client`       | Runs TS in watch mode                                          |                              |
| `develop:seats`        | Runs TS in watch mode                                          |                              |
| `develop:site`         | Builds Gatsby site (dev)                                       | Running API                  |
| `develop:ui:sb`        | Runs Storybook                                                 |                              |
| `develop:ui`           | Runs TS in watch mode                                          |                              |
| `lint`                 | Runs eslint on the whole project                               |                              |
| `postinstall`          | Automatic script for setting up Husky                          |                              |
| `serve:site`           | Serves main site                                               | Site prod build, running API |
| `test`                 | Runs type checks, test suites and linter on the whole project  |                              |

## Development

:warning: Development work has been done on Ubuntu 20.04 under WSL 2. Most commands and scripts should work on other Unix systems as well but they will most likely fail on Windows. Version `v14.15.2` of Node.js was used during development.

Start with installing dependencies (installs all dependencies for all packages):

```
yarn install
```

For package specific test / build / development commands see each package's README.

## Git flow

Rules:

- Commits should follow [Conventional Commits][ccommits] convention
- New branches should branch off `dev`
- New PRs should be submitted to `dev`

## Releases

// TODO

## GitHub workflows

// TODO

[api-pkg]: https://github.com/MMMalik/ilemandatow/tree/main/packages/api
[client-pkg]: https://github.com/MMMalik/ilemandatow/tree/main/packages/client
[locales-pkg]: https://github.com/MMMalik/ilemandatow/tree/main/packages/locales
[seats-pkg]: https://github.com/MMMalik/ilemandatow/tree/main/packages/seats
[site-pkg]: https://github.com/MMMalik/ilemandatow/tree/main/packages/site
[ui-pkg]: https://github.com/MMMalik/ilemandatow/tree/main/packages/ui
[ccommits]: https://www.conventionalcommits.org/en/v1.0.0/
