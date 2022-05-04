# nuxt-trailing-slash

Module add server middleware that redirect all routes to slashed. Useful to maintain only slashed routes and load reduction.

## 💿 Installation

First install

```sh
# for npm
npm install nuxt-trailing-slash --save

# for yarn
yarn add nuxt-trailing-slash
```

After the installation in the previous section, you need to add `nuxt-trailing-slash` module to `modules` options of `nuxt.confg.[ts|js]`

```js
// nuxt.config.ts
export default defineNuxtConfig({
  // ...
  modules: ['nuxt-trailing-slash']
  // ...
})
```

## ©️ LICENSE

MIT
