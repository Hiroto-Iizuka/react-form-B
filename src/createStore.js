import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { basicAnswersReducer } from './reducers/basicAnswersReducer'
import { questionAnswersReducer } from './reducers/questionAnswersReducer'
import { counselingDetailAnswerReducer } from './reducers/counselingDetailAnswerReducer'


export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      basic: basicAnswersReducer,
      question: questionAnswersReducer,
      counseling_detail: counselingDetailAnswerReducer
    }),
    applyMiddleware(
      logger,
    )
  );

  return store;
}