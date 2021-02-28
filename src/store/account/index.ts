import { Module } from "vuex";
import { RootState } from "../types";
import { AccountState } from "./types";
import { actions } from './actions';
import { mutations } from './mutations';

export const account: Module<AccountState, RootState> = {
  namespaced: true,
  state: {
    account: {
      accountName: '苹果',
      accountPassword: '',
    }
  },
  mutations,
  actions,
  //getters用于二次处理处理数据，
  // getters: {}
}