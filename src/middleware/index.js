import logger from './logger.js'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
export const sagaMiddleware = createSagaMiddleware();

export const middleware = applyMiddleware(
  sagaMiddleware,
  thunk,
  logger,
)