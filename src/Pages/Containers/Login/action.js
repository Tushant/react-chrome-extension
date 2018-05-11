import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

import action from 'Utils/action';

export const login = action(LOGIN, 'user');
export const loginSuccess = action(LOGIN_SUCCESS, 'data');
export const loginFailure = action(LOGIN_FAILURE, 'error');
