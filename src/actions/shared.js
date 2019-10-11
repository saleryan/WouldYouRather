export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';
export const RECEIVE_ANSWER = "RECEIVE_ANSWER"

import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../utils/_DATA.js';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function getInitialData() {
    return (dispatch) => {
        return Promise.all([
            _getUsers(),
            _getQuestions()]
        ).then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    }

}


export function saveAnswer(username, questionId, answerId) {
    return (dispatch) => {
        _saveQuestionAnswer(username, questionId, answerId).then(
            answer => {
                dispatch(receiveAnswer(username, questionId, answerId))
            });
    }
}

export function receiveAnswer(username, questionId, answer) {
    return {
        type: RECEIVE_ANSWER,
        username,
        questionId,
        answer
    }
}
