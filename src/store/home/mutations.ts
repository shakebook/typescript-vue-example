import { MutationTree } from "vuex";
import { HomeState, CHANGE_ACCOUNT, AccountInfo } from "./types";

export const mutations: MutationTree<HomeState> = {
  [CHANGE_ACCOUNT](state: HomeState, payload: AccountInfo): void {
    state.account = payload
  }
}