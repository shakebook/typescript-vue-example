import { MutationTree } from "vuex";
import { AccountState, CHANGE_ACCOUNT, AccountInfo } from "./types";

export const mutations: MutationTree<AccountState> = {
  [CHANGE_ACCOUNT](state: AccountState, payload: AccountInfo): void {
    state.account = payload
  }
}