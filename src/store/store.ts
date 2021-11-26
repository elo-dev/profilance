import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { newsReducer } from './reducers/newsReducer'

const rootReducer = combineReducers({
  userReducer,
  newsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof rootReducer>