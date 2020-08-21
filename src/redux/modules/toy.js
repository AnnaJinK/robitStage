import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as ToyAPI from 'lib/api/toy';

const CHANGE_INPUT = 'toy/CHANGE_INPUT'; // input 값 변경
const INITIALIZE_FORM = 'toy/INITIALIZE_FORM'; // form 초기화
const CHECK_INDEX_EXISTS = 'toy/CHECK_INDEX_EXISTS'; // 이메일 중복 확인
const SET_ERROR = 'toy/SET_ERROR'; // 오류 설정
const TOY_REGISTER = 'toy/TOY_REGISTER'; // 이메일 가입
const GET_TOYLIST = 'user/GET_TOYLIST'; // 리스트
const PATCH_INPUT = 'toy/PATCH_INPUT'; // input 값 업데이트
const TOY_UPDATE = 'toy/TOY_UPDATE'; 
const TOY_DELETE = 'toy/TOY_DELETE';

export const changeInput = createAction(CHANGE_INPUT); //  { form, name, value }
export const patchInput = createAction(PATCH_INPUT); //  { form, name, value }
export const initializeForm = createAction(INITIALIZE_FORM); // form 
export const checkIndexExists = createAction(CHECK_INDEX_EXISTS, ToyAPI.checkIndexExists);
export const setError = createAction(SET_ERROR); // { form, message }
export const toyRegister = createAction(TOY_REGISTER, ToyAPI.toyRegister);
export const sortByIndex = createAction(GET_TOYLIST, ToyAPI.sortByIndex);
export const toyUpdate = createAction(TOY_UPDATE, ToyAPI.toyUpdate);
export const toyDelete = createAction(TOY_DELETE, ToyAPI.toyDelete);

const initialState = Map({
  form: {
    active: true,
    index: '',
    name: '',
    job: '',
    descsum: '',
    mechanism: '',
    image1: '',
    image2: '',
    image3: '',
    linktostore: '',
    linktovideo: '',
    toydesc: ''
  },
  exists: {
    index: false
  },
  error: null
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { form, name, value } = action.payload;
    return state.setIn([form, name], value);
  },
  [INITIALIZE_FORM]: (state, action) => {
    const initialForm = initialState.get(action.payload);
    return state.set(action.payload, initialForm);
  },
  ...pender({
    type: CHECK_INDEX_EXISTS,
    onSuccess: (state, action) => state.setIn(['exists', 'index'], action.payload.data.exists)
  }),
  [SET_ERROR]: (state, action) => {
    const { message } = action.payload;
    return state.set('error', message);
  }
}, initialState);