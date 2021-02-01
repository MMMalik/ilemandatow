# @ilemandatow/api

Headless CMS with GraphQL API and admin panel.

Go back to [root](https://github.com/MMMalik/ilemandatow).

### Development

#### Setup database

This project is using [PostgreSQL](https://www.postgresql.org/) database. Create a new database on your PostgreSQL server (either local or cloud-based).

The following snippet creates `ilemandatow` database and grants access to `local` user:

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
```

Setup database structure by running the following command (either from project root or package root):

```
yarn db:setup
```

Get data from preprod database:

```
yarn db:seed
```

### Scripts

| Command        | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| build:keystone | Creates production build of KeystoneJs in `dist` dir        |
| build          | Runs typescript and creates output in `build` dir           |
| check-types    | Runs typescript without emitting files (only type checking) |
| cleanup        | Removes build dirs: `dist` and `build`                      |
| db:seed        | Seeds data from content package                             |
| db:setup       | Creates database structure via KeystoneJs                   |
| develop        | Compiles project and starts server for local development    |
| start          | Starts server in production mode                            |
