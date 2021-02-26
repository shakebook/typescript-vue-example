import { ActionTree } from "vuex";
import { RootState } from "../types";
import { CHANGE_ACCOUNT, HomeState, AccountCommit } from "./types";


export const actions: ActionTree<HomeState, RootState> = {
  [CHANGE_ACCOUNT](store) {
    const commit: AccountCommit = store.commit
    setTimeout(() => {
      commit(CHANGE_ACCOUNT, {
        accountName: '牛顿',
        accountPassword: '123456'
      })
    }, 200);

  }
}