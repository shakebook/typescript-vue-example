import { createStore, Store, useStore as baseUseStore, createLogger } from 'vuex'
import { account } from '@/store/account'
import { role } from '@/store/role'
import { RootState } from './types'
import { InjectionKey } from 'vue'

export const ROOT_KEY: InjectionKey<Store<RootState>> = Symbol()

export default createStore<RootState>({
  modules: {
    account,
    role,
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