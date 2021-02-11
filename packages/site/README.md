# @ilemandatow/site

## Introduction

Main site of ilemandatow.pl.

## Tools & libraries

- [Gatsby][gatsby]

## Development

:warning: Development rules:

- Logic for smaller, potentially re-usable components goes to `./src/components` folder
- Any components without business logic should go to `@ilemandatow/ui` package
- Logic that groups multiple components for a page goes to `./src/views` folder
- Page logic goes to `./src/pages` folder or to `./src/templates` folder
- Logic related to page layout goes to `./src/layout` folder
- Gatsby GraphQL logic (static queries, fragments) should go to `./src/data` folder
- Gatsby GraphQL logic for a page should go to page component's file

Run API (from project root):

```
yarn develop:api
```

Run Gatsby in development mode:

```
yarn develop
```

Or from project root:

```
yarn develop:site
```

### Scripts

| Command       | Description                     | Requirements |
| ------------- | ------------------------------- | ------------ |
| `build`       | Builds Gatsby site (production) | Running API  |
| `check-types` | Runs TS without emitting code   |              |
| `clean`       | Cleans build folder             |              |
| `develop`     | Runs Gatsby in dev mode         | Running API  |
| `serve`       | Serves Gatsby prod build        | Running API  |

[gatsby]: https://www.gatsbyjs.com/
