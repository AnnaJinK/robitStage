import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import toy from './toy'

import { penderReducer } from 'redux-pender';

export default combineReducers({
    auth,
    user,
    toy,
    pender: penderReducer
});