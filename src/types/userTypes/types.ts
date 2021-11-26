export interface UserState {
  username: string
  isUser: boolean
  isAdmin: boolean
  loading: boolean
}

export enum UserActionType {
  SIGNIN = 'SIGNIN',
  LOADING = 'LOADING',
  USERNAME = 'USERNAME',
  SIGNOUT = 'SIGNOUT',
  ADMIN = 'ADMIN',
  ADMIN_SIGNOUT = 'ADMIN_SIGNOUT',
}

export interface UserAuthAction {
  type: UserActionType.SIGNIN
  payload: boolean
}

export interface UsernameAction {
  type: UserActionType.USERNAME
  payload: string
}

export interface LoadingAction {
  type: UserActionType.LOADING
  payload: boolean
}

export interface SignOutAction {
  type: UserActionType.SIGNOUT
  payload: boolean
}

export interface AdminSignOutAction {
  type: UserActionType.ADMIN_SIGNOUT
  payload: boolean
}

export interface AdminAction {
  type: UserActionType.ADMIN
  payload: boolean
}

export type UserAction =
  | UserAuthAction
  | UsernameAction
  | LoadingAction
  | SignOutAction
  | AdminSignOutAction
  | AdminAction
