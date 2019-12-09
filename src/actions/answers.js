export const SAVE_ANSWER = "SAVE_ANSWER"
export const RECEIVE_ANSWER = "RECEIVE_ANSWER"
export function saveAnswer(username, questionId, answerId) {
    return {
        type: SAVE_ANSWER,
        username,
        questionId,
        answerId
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