# @ilemandatow/api

This package contains headless CMS, GraphQL API and database utils.

## Tools & libraries

- [KeystoneJS](https://www.keystonejs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex.js](http://knexjs.org/)

## Development

### Setup database

Create a new database on your PostgreSQL server (either local or cloud-based). Following snippet creates `ilemandatow` database and grants access to `local` user:

```
create database ilemandatow;
grant all on database ilemandatow to local;
```

Once database is created, add `.env` file in the root of this package. It must contain the following:

```
# Database user
DB_USER=local
# Database password
DB_PASS=***
# Database name
DB_NAME=ilemandatow
# PostgreSQL server location
DB_URI=localhost:5432
# Name of the local admin (required to seed user data for new database)
APP_ADMIN=admin
# Pass of the local admin (required to seed user data)
APP_ADMIN_PASS=***
```

Setup database structure by running the following command (either from project root or package root):

```
yarn db:setup // it will also seed admin data
```

Add more data by restoring backup file of preprod. Make sure that backup file is saved on your machine under `~/postgres/backups/ilemandatow`. Run the following command:

```
yarn db:restore
```

Start development server by running:

```
yarn develop
```

Or from project root:

```
yarn develop:api
```

Navigate to http://localhost:3000/admin and login with admin credentials from .env file.

### Introspection schema

After every change to KeystoneJS data model (under `./src/lists/**`), recreate introspection schema:

```
yarn build:codegen
```

Or from project root:

```
yarn build:api:codegen
```

Makes sure to commit those changes.

### Migrations

Changes to KeystoneJS data model must be associated with respective Knex migration file. For instance, if a new field is added to a list, a new migration file must be created with:

```
yarn db:migrate:make newField
```

Logic for migration must be implemented within the new file and file must be commited.

### Scripts

| Command             | Description                                                | Requirements                |
| ------------------- | ---------------------------------------------------------- | --------------------------- |
| `build:codegen`     | Generates code from running API, e.g. introspection schema | Running API (dev only)      |
| `build:keystone`    | Builds KeystonJS app assets (production)                   | Running PostgreSQL database |
| `build`             | Compiles source code                                       |                             |
| `check-types`       | Runs TS without emitting code                              |                             |
| `clean`             | Cleans build folder                                        |                             |
| `db:backup:cleanup` | Cleans database backup files                               |                             |
| `db:backup`         | Backups database                                           | Running PostgreSQL database |
| `db:migrate:make`   | Creates migration file for database                        |                             |
| `db:migrate:down`   | Rollbacks last migration                                   | Running PostgreSQL database |
| `db:migrate:up`     | Runs latest migration                                      | Running PostgreSQL database |
| `db:restore`        | Restores database from latest backup                       | Running PostgreSQL database |
| `db:seed`           | Seeds database with init data                              | Running PostgreSQL database |
| `db:setup`          | Creates init structure of databse                          | Running PostgreSQL database |
| `develop`           | Runs API server in dev mode                                | Running PostgreSQL database |
