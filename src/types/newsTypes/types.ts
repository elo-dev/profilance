export enum NewsActionTypes {
  NEWS_CONFIRMED = 'NEWS_CONFIRMED',
  NEWS_NOT_CONFIRMED = 'NEWS_NOT_CONFIRMED',
  DELETE_NEWS = 'DELETE_NEWS',
}

// State Interface

export interface INews {
  id: number
  title: string
  text: string
  date: string
}

export interface NewsState {
  news_confirmed: INews[]
  news_not_confirmed: INews[]
}

// Actions Interface

export interface NewsConfirmed {
  type: NewsActionTypes.NEWS_CONFIRMED
  payload: INews
}

export interface NewsNotConfirmed {
  type: NewsActionTypes.NEWS_NOT_CONFIRMED
  payload: INews
}

export interface DeleteNews {
  type: NewsActionTypes.DELETE_NEWS
  payload: number
}

export type NewsAction = NewsConfirmed | NewsNotConfirmed | DeleteNews
