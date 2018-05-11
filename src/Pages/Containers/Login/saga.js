import { call, cancel, fork, take, put, takeLatest } from 'redux-saga/effects';

import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './constants';
import { loginSuccess, loginFailure } from './action';
import { NaviExtension } from 'Store/sagas';

function* redirectOnSuccess() {
  const action = yield take(LOGIN_SUCCESS)
  const { data } = action
  console.log('data', data);
  if (data.key) {
    localStorage.setItem('user_token', data.key);
  }
}

function* login(action) {
  const { user } = action;
  if(user) {
    const successWatcher = yield fork(redirectOnSuccess);
    yield call(NaviExtension.post(`http://127.0.0.1:3008/users/sign_in.json`,
          loginSuccess,
          loginFailure,
          user
    ))
    yield take([LOGIN_FAILURE])
    yield cancel(successWatcher)
  }
}

function* LoginSaga() {
  yield takeLatest(LOGIN, login);
}

export default LoginSaga;
