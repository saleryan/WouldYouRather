export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const RECEIVE_QUESTION = "RECEIVE_QUESTION"
export const SAVE_QUESTION = "SAVE_QUESTION"

export function receiveQuestions(questions) {
 return {
  type: RECEIVE_QUESTIONS,
   questions
 }
}

export function saveQuestion(optionOneText, optionTwoText, author) {
  return {
      type: SAVE_QUESTION,
      optionOneText,
      optionTwoText, 
      author
  }
}

export function receiveQuestion(question) {
  return {
      type: RECEIVE_QUESTION,
      question
  }
}




