import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import validateUser from './authentication.saga';


 export default function* mySaga() {
    yield takeEvery("VALIDATE_USER", validateUser);
}