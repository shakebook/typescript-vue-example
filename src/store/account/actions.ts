import { ActionTree } from "vuex";
import { RootState } from "../types";
import { CHANGE_ACCOUNT, AccountState, AccountCommit } from "./types";


export const actions: ActionTree<AccountState, RootState> = {
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