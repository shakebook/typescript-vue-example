import { AccountState } from "./account/types";
import { RoleState } from "./role/types";

export interface RootState {
  account: AccountState
  role: RoleState
}