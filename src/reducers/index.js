import { combineReducers } from 'redux';
import authentication from './authentication';

const rootReducer = combineReducers({
    loggedIn: authentication
});

export default rootReducer;
