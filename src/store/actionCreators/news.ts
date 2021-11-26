import { Dispatch } from 'redux'
import { INews, NewsAction, NewsActionTypes } from '../../types/newsTypes/types'

export const setNewsConfirmed = (news: INews) => (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.NEWS_CONFIRMED, payload: news })
}

export const setNewsNotConfirmed = (news: INews) => (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.NEWS_NOT_CONFIRMED, payload: news })
}

export const deleteNews = (id: number) => (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.DELETE_NEWS, payload: id })
}