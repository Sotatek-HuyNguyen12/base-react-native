import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootSaga from 'reduxSaga';
import userReducer from 'reduxSaga/user/userSlice';
import rootReducer from 'reduxSaga/root/rootSlice';
import todoReducer from 'reduxSaga/todo/todoSlice';

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  user: userReducer,
  root: rootReducer,
  todo: todoReducer,
};

const logger = createLogger({
  // ...options
});

export const store = configureStore({
  reducer: reducers,
  middleware: new MiddlewareArray().concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
