import { showLoading,hideLoading } from "react-redux-loading";
import { put, take } from 'redux-saga/effects';
import { _getUsers, _getQuestions } from '../utils/_DATA.js';
import { receiveUsers, GET_INITIAL_DATA, receiveQuestions  } from '../actions';

export function* initDataSaga() {
    yield take(GET_INITIAL_DATA);
    yield put(showLoading());
    const [users, questions] = yield Promise.all([
        _getUsers(),
        _getQuestions()]);
    yield put(receiveUsers(users));
    yield put(receiveQuestions(questions));
    yield put(hideLoading())
}