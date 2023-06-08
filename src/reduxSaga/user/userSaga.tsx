import {all, call, put, takeLatest} from 'redux-saga/effects';
import {userActions} from './userSlice';
import ApiUtil from 'utils/ApiUltils';
import {rootActions} from 'reduxSaga/root/rootSlice';

export function* userRuntime() {
  yield all([takeLatest(userActions.getUsers.type, handleGetUsers)]);
}

function* handleGetUsers(): any {
  try {
    yield put(rootActions.displayLoading());
    const api = () =>
      ApiUtil.fetch('api/users/random_user?size=10', {method: 'GET'});
    const response = yield call(api);
    yield put(rootActions.hideLoading());
    if (response?.status === 200 && response?.data) {
      yield put(userActions.getUsersSuccess(response?.data));
      console.log('Success');
    } else {
      console.log('failed');
    }
  } catch (error) {
    console.log('err', error);
    yield put(rootActions.hideLoading());
  }
}
