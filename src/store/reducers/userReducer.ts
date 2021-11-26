import { UserAction, UserActionType, UserState } from "../../types/userTypes/types"

const initialState: UserState = {
  username: '',
  isUser: false,
  isAdmin: false,
  loading: false,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.SIGNIN:
      return { ...state, isUser: action.payload }
    case UserActionType.LOADING:
      return { ...state, loading: action.payload }
    case UserActionType.USERNAME:
      return { ...state, username: action.payload }
    case UserActionType.SIGNOUT:
      return { ...state, isUser: action.payload }
    case UserActionType.ADMIN_SIGNOUT:
      return { ...state, isAdmin: action.payload }
    case UserActionType.ADMIN:
      return { ...state, isAdmin: action.payload }
    default:
      return state
  }
}
