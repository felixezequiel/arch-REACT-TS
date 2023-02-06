/* eslint-disable no-underscore-dangle */
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, compose, createStore, Store } from 'redux';

import rootReducer from './rootReducer';
import { rootSagasYampay } from './rootSaga';
import { AppState } from './state.types';

const reduxDevTool = () => {
  const _window = window as any;

  return typeof _window === 'object' &&
    typeof _window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? _window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => {
        return f;
      };
};

export function configStore(INITIAL_APP_STATE: AppState): Store<AppState> {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer,
    INITIAL_APP_STATE,
    compose(middleware, reduxDevTool())
  );

  sagaMiddleware.run(rootSagasYampay);

  return store;
}
