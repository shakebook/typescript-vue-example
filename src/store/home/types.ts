import { CommitOptions, Payload } from "vuex";

export const CHANGE_ACCOUNT = 'CHANGE_ACCOUNT'

export interface HomeState {
  account: AccountInfo,
}

export interface AccountInfo {
  accountName: string
  accountPassword: string
}

export interface AccountCommit {
  (type: string, payload?: AccountInfo, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

