import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

import { Map } from 'immutable';

const LOCAL_LOGIN = 'auth/LOCAL_LOGIN'; // 이메일 로그인
const LOGOUT = 'auth/LOGOUT'; // 로그아웃

export const login = createAction(LOCAL_LOGIN, AuthAPI.login);
export const logout = createAction(LOGOUT, AuthAPI.logout);

const initialState = Map({
  login: {
    form: {
      id: '',
      password: ''
    }
  },
  result: {}
});

export default handleActions({
  ...pender({
    type: LOCAL_LOGIN,
    onSuccess: (state, action) => {
      console.log(action.payload);
      return state.set('result', action.payload.data);
    }
  })
}, initialState);