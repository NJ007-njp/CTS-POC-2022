import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as func from './authentication.saga';


 export default function* mySaga() {
    yield takeEvery("VALIDATE_USER", func.validateUser);
    yield takeEvery("SIGNUP_USER", func.validateUser);
}