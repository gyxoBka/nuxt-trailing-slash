import {defineNuxtModule, addServerMiddleware} from '@nuxt/kit'
import trailingSlash from "./runtime/trailingSlash";

export default defineNuxtModule({
  meta: {
    name: 'nuxt-trailing-slash',
  },
  setup() {
    addServerMiddleware({
      handler: trailingSlash
    })
  }
})
