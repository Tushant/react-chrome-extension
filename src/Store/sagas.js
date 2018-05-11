import { all, call, put, fork } from 'redux-saga/effects';

import { request, requestJSON } from 'Utils/request';
import LoginSaga from 'Pages/Containers/Login/saga';

const API_BASE = 'http://localhost:8000/'
export class NaviExtension {
  /**
   * Generic api data loader
   */
  static dataLoader(apiUri, onSuccess, onError, data, ...actionArguments) {
    return function* () {  // eslint-disable-line func-names
      const requestURL = `${apiUri}`;
      try {
        // Call our request helper (see 'utils/request')
        let options;
        if (data !== undefined) {
          // If we have data to post
          options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': 'Basic ' + sessionKey,
              'X-Requested-With': 'XMLHttpRequest',
            },
          };
        }
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (e) {
        // console.log(e);
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (_) {
          error = {
            errors: [{
              code: e.response.status,
              msg: e.response.statusText,
            }],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  /*
   * Shorthand GET function
   */
  static get(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(apiUri, onSuccess, onError, undefined, ...actionArguments);
  }

  /*
   * Shorthand POST function
   */
  static post(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(apiUri, onSuccess, onError, data, ...actionArguments);
  }


  /**
   * Shorthand DELETE function
   */
  static delete(apiUri, onSuccess, onError, ...actionArguments) {
    return function* () {  // eslint-disable-line func-names
      const requestURL = `${apiUri}`;
      try {
        // Call our request helper (see 'utils/request')
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        };
        yield call(request, requestURL, options);
        yield put(onSuccess(...actionArguments));
      } catch (e) {
        // console.log(e);
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (_) {
          error = {
            errors: [{
              code: e.response.status,
              msg: e.response.statusText,
            }],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }
}


/**
 * Root saga manages watcher lifecycle
 */

function* appSaga(){
  console.log('appsaga')
  yield all([fork(LoginSaga)])
}

export default appSaga;
