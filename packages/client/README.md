# @ilemandatow/client

Client-side boilerplate for interacting with GraphQL API. This includes:

- utils for filtering and manipulating data from API
- React hooks for stateful logic related to data fetching, filtering, sorting, etc.

## Tools & libraries

- [graphql-hooks](https://github.com/nearform/graphql-hooks)

## Development

Start API development server (follow [`@ilemandatow/api`](https://github.com/MMMalik/ilemandatow/tree/main/packages/api/README.md) README).

Generate TS types for operations:

```
yarn build:codegen
```

Or from project root:

```
yarn build:ui:codegen
```

Run TypeScript in watch mode:

```
yarn develop
```

Or from project root:

```
yarn develop:ui
```

### Scripts

| Command         | Description                                                | Requirements           |
| --------------- | ---------------------------------------------------------- | ---------------------- |
| `build:codegen` | Generates code from running API for clients, e.g. TS types | Running API (dev only) |
| `build`         | Compiles source code                                       |                        |
| `check-types`   | Runs TS without emitting code                              |                        |
| `clean`         | Cleans build folder                                        |                        |
| `develop`       | Runs TS in watch mode                                      |                        |
