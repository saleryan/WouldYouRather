import { takeLatest, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestionAnswer } from '../utils/_DATA.js';
import { receiveAnswer, SAVE_ANSWER } from '../actions';

export function* saveAnswer({ username, questionId, answerId }) {
    yield put(showLoading())
    yield _saveQuestionAnswer(username, questionId, answerId);

    yield put(receiveAnswer(username, questionId, answerId));
    yield put(hideLoading())
}
export function* saveAnswerSaga() {
    yield takeLatest(SAVE_ANSWER, saveAnswer);

}