import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as axiosApi from 'axios';

const axios = axiosApi.default;

export function* validateUser(param) {
   console.log(param);
    try {
      axios.post('http://localhost:4000/login',{param}).then().catch();
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 export function* signUpUser(param) {
   console.log(param);
    try {
      axios.post('http://localhost:4000/signup',{param}).then().catch();
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }
