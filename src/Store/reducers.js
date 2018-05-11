import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form';
import loginReducer from 'Pages/Containers/Login/reducer';

const rootReducer = combineReducers({
	// Use forms.global store path for all controls not attached to data
  form,
  loginReducer,
});

export default rootReducer;
