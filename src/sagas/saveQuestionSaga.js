import { _saveQuestion } from '../utils/_DATA.js';
import { takeLatest, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from "react-redux-loading";
import { receiveQuestion, SAVE_QUESTION } from '../actions';

export function* saveQuestion({ optionOneText, optionTwoText, author }) {
    yield put(showLoading())
    const question = yield _saveQuestion({ optionOneText, optionTwoText, author })

    yield put(receiveQuestion(question));
    yield put(hideLoading())
}
export function* saveQuestionSaga() {
    yield takeLatest(SAVE_QUESTION, saveQuestion);

}