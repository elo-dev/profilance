import { NewsAction, NewsActionTypes, NewsState } from "../../types/newsTypes/types"

const initialState: NewsState = {
  news_confirmed: [],
  news_not_confirmed: [],
}

export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
  switch (action.type) {
    case NewsActionTypes.NEWS_CONFIRMED:
      return {
        ...state,
        news_confirmed: [...state.news_confirmed, action.payload],
      }
    case NewsActionTypes.NEWS_NOT_CONFIRMED:
      return {
        ...state,
        news_not_confirmed: [...state.news_not_confirmed, action.payload],
      }
    case NewsActionTypes.DELETE_NEWS:
      return {
        ...state,
        news_not_confirmed: state.news_not_confirmed.filter(
          (news) => news.id !== action.payload
        ),
      }
    default:
      return state
  }
}
