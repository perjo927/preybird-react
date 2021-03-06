# PREYBIRD-React

## About
This is a React web application listing series fetched from an API.

## Getting started
> git clone https://github.com/perjo927/preybird-react.git

> yarn

## Scripts
You can use [Yarn](https://yarnpkg.com) or [NPM](https://www.npmjs.com/), exchange the **npm** commands with **yarn** and vice versa.

### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`
Launches the test runner in the interactive watch mode. Make to sure **build** before the tests are run.<br>

### ~~`yarn e2e`~~
*WIP*
> webdriver-manager update

> webdriver-manager start

> protractor ./src/e2e/conf.js


## Demo
Visit: **[http://perplay.surge.sh/](http://perplay.surge.sh/)**

## Design Decisions
* MVP feature-based (Gitflow) development, small releases
* Single Page, client-side only application
* Mobile first, responsive design using flexbox, media and element queries
* Theming with SASS
* SVG graphics for easier theming
* Make use of ES6/7 (_ex: classes, arrow functions, async/await, etc_)
* Make use of Webpack
* Use Redux asyn actions for managing state
* Target modern browsers to make use of latest web technologies (_ex: fetch API, img srcset, flexbox, etc_)
* Unit tested using BDD for a clearly defined scope and structure
* E2E tested using Protractor (_WIP_)
* Modular architecture using stateless components and services
* Top-down data flow

