import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as axiosApi from 'axios';

const axios = axiosApi.default;

function* validateUser(param) {
    try {
    //    const user = yield call(Api.fetchUser, action.payload.userId);
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    axios.post('http://localhost:3001',{param}).then().catch();
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 export default validateUser;