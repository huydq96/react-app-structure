# React App Directory Structure

Hi ! Welcome here.
This repository can be used for helping you set up folder structure for your React app.

## Technology

- React v16
- react-router v5
- TypeScript
- sass
- eslint + typescript-eslint
- Prettier
- Storybook v5
- EditorConfig

## How can I use this ?

Prerequisites

- Node.js (>=v14)
- yarn

Commands

```
# clone this repository
git clone git@github.com:huydq96/react-app-structure.git
cd react-app-structure

# install necessary package
yarn

# you can check if it working
yarn start

# use storybook
yarn storybook
```

## Directory Structure

```
/
.
├── public: Initial folder created by Create React App
└── src
	├── assets: imgs/css.
	├── components: React components
	├── invariables: Changeless files (eg: constant, recommend)
	├── pages: Screen components
	├── types: Types definitation (recommend)
	└── utils: Utility functions
```

> **_NOTE:_** I created some example files ( component, page ) with named _"sample"_. You can following it and remove when not necessary.

## Reference Knowledge

- [Creating a ReactJS Template Series' Articles](https://dev.to/aryclenio/series/8205)
- [React Router Architecture](https://www.ryanjyost.com/react-routing/)
- [CSS directory structure](https://github.com/inuitcss/inuitcss#css-directory-structure)
- [The rules for naming BEM entities](https://en.bem.info/methodology/naming-convention/#naming-rules)
