# @ilemandatow/ui

## Introduction

Re-usable set of pure UI components.

## Tools & libraries

- [tachyons][tachyons]
- [fontawesome][fontawesome]
- [Storybook][storybook]

## Development

:warning: Each component in this library must follow certain rules:

- There is one folder for each exposed component
- Component is created in isolation with help of [Storybook][storybook]
- Component folder must contain relevant stories and docs
- Component must be devoid of all business-logic. Only UI logic is acceptable.
- Component uses [tachyons][tachyons] for css (utility-first css library)

Run Storybook:

```
yarn storybook
```

Or from project root:

```
yarn develop:ui:sb
```

Once development with Storybook is done, run the following to create `dist` folder:

```
yarn develop
```

Or from project root:

```
yarn develop:ui
```

### Scripts

| Command       | Description                   | Requirements |
| ------------- | ----------------------------- | ------------ |
| `build`       | Compiles source code          |              |
| `check-types` | Runs TS without emitting code |              |
| `clean`       | Cleans build folder           |              |
| `develop`     | Runs TS in watch mode         |              |
| `storybook`   | Runs Storybook                |              |

[storybook]: https://storybook.js.org/
[tachyons]: https://tachyons.io/
[fontawesome]: https://fontawesome.com/
