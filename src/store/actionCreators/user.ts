import { Dispatch } from 'redux'
import { UserActionType } from '../../types/userTypes/types'
import { UserAction } from '../../types/userTypes/types'

export const userAuth = (name: string) => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.LOADING, payload: true })
  dispatch({ type: UserActionType.USERNAME, payload: name })
  dispatch({ type: UserActionType.SIGNIN, payload: true })
  dispatch({ type: UserActionType.LOADING, payload: false })
}

export const adminAuth = (name: string) => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.LOADING, payload: true })
  dispatch({ type: UserActionType.ADMIN, payload: true })
  dispatch({ type: UserActionType.USERNAME, payload: name })
  dispatch({ type: UserActionType.LOADING, payload: false })
}

export const userSignOut = () => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.USERNAME, payload: '' })
  dispatch({ type: UserActionType.SIGNOUT, payload: false })
}

export const adminSignOut = () => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.USERNAME, payload: '' })
  dispatch({ type: UserActionType.ADMIN_SIGNOUT, payload: false })
}
