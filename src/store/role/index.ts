import { Module } from "vuex";
import { RootState } from "@/store/types";
import { RoleState } from "./types";
import { mutations } from './mutations'
import { actions } from './actions'

const initState: RoleState = {
  roleList: [
    {
      roleName: '王小虎',
      createAt: '2021-02-19'
    },
    {
      roleName: '李四',
      createAt: '2021-02-15'
    },
  ],
  dialogFormVisible: false,
}

export const role: Module<RoleState, RootState> = {
  namespaced: true,
  state: initState,
  mutations,
  actions,
  // getters: {}
}