import { MutationTree } from "vuex";
import { RoleState, SET_ROLE_LIST, SET_ROLE_DIALOG_FORM_VISIBLE, CREATE_ROLE_ITEM, Role } from "./types";

export const mutations: MutationTree<RoleState> = {
  [SET_ROLE_LIST](state: RoleState, payload: Role[]): void {
    state.roleList = payload
  },
  [SET_ROLE_DIALOG_FORM_VISIBLE](state: RoleState, payload: boolean): void {
    state.dialogFormVisible = payload
  },
}