import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
 } from './constants';

 const initialState = {
   fetching: false,
   error: null,
   user: []
 }

 function loginReducer(state=initialState, action) {
   switch (action.type) {
     case LOGIN:
      console.log('started ------------>')
      return {...state, fetching: true}
    case LOGIN_SUCCESS:
      console.log('success ------------->', action)
      return {...state, fetching: false, user: action.data}
    case LOGIN_FAILURE:
      console.log('failure ------------->', action)
      return {...state, fetching: false, error: action.error}
     default:
      return state;
   }
 }

 export default loginReducer;
