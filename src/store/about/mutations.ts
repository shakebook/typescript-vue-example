import { MutationTree } from "vuex";
import { AboutState, CHANGE_COUNTER } from "./types";

export const mutations: MutationTree<AboutState> = {
  [CHANGE_COUNTER](state: AboutState, payload: number): void {
    state.count = payload
  }
}