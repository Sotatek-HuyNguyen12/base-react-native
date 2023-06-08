import {all} from 'redux-saga/effects';
import {userRuntime} from './user/userSaga';

export default function* rootSaga() {
  yield all([userRuntime()]);
}
