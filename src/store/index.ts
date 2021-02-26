import { createStore, Store, useStore as baseUseStore, createLogger } from 'vuex'
import { home } from '@/store/home'
import { about } from '@/store/about'
import { RootState } from './types'
import { InjectionKey } from 'vue'

export const ROOT_KEY: InjectionKey<Store<RootState>> = Symbol()

export default createStore<RootState>({
  modules: {
    home,
    about,
  },
  //replace vuex devtools debug state in brower console
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(ROOT_KEY)
}