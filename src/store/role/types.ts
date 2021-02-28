import { CommitOptions, Payload } from "vuex"

export const NAME_SPACE = 'role/'
export const SET_ROLE_LIST = 'SET_ROLE_LIST'
export const SET_ROLE_DIALOG_FORM_VISIBLE = 'SET_ROLE_DIALOG_FORM_VISIBLE'
export const CREATE_ROLE_ITEM = 'CREATE_ROLE_ITEM'

//定义role类型
export interface Role {
  createAt: string
  roleName: string
}

//role模块状态
export interface RoleState {
  roleList: Role[],
  dialogFormVisible: boolean,
}

//role模块commit类型
export interface RoleCommit {
  (type: string, payload?: Role[], options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

