import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import schoolReducer from './schoolReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    school: schoolReducer
})