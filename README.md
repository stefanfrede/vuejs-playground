# 📦 Vue.js Starter-Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fee65e03-5573-4abb-8f02-305b6737c69d/deploy-status)](https://app.netlify.com/sites/vuejs-starter-kit/deploys)

[Vue.js](https://v3.vuejs.org/), powered by [Vite](https://vitejs.dev/) with [Vue Router](https://router.vuejs.org/) and [Tailwind CSS](https://tailwindcss.com).

## Install Dependencies

First, make sure you have `npm` (packaged with [Node.js](https://nodejs.org)) installed, then run `npm run setup` to install the dependencies and validate that everything is running correctly.

## Available Scripts

### Development

```bash
# runs the app in the development mode.
npm run dev
```

Open http://localhost:3000 to view it in the browser.

The page will reload if you make file changes.

### Production

```bash
# builds a static copy of your site to the `dist/` folder.
npm run build
```

Your code is now ready to be deployed!

## Netlify

To get your own instance of this 11st-Starter-Kit cloned and deploying to Netlify very quickly, just click the button below and follow the instructions.

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/stefanfrede/vuejs-starter-kit)

### Add some Netlify helpers

Netlify Dev adds the ability to use Netlify redirects, proxies, and serverless functions.

```bash
# install the Netlify CLI in order to get netlify dev
npm install -g netlify-cli

# run a local server with some added Netlify sugar
netlify dev
```