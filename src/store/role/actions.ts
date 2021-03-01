import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import {
  CREATE_ROLE_ITEM,
  SET_ROLE_LIST,
  SET_ROLE_DIALOG_FORM_VISIBLE,
  RoleState,
  RoleCommit,
} from "./types";


export const actions: ActionTree<RoleState, RootState> = {
  [CREATE_ROLE_ITEM](store) {
    const commit = store.commit
    commit as RoleCommit
    //异步逻辑，http请求
    setTimeout(() => {
      const prevList = store.state.roleList
      commit(SET_ROLE_LIST, [...prevList,
      { createAt: '2021-02-01', roleName: 'yangjiafeng' }
      ])
      commit(SET_ROLE_DIALOG_FORM_VISIBLE, false);
    }, 200)

  }
}