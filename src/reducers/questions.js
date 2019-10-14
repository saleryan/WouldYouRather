import {RECEIVE_QUESTIONS} from '../actions/questions';
import {RECEIVE_ANSWER, RECEIVE_QUESTION} from '../actions/shared';

export function questions(state = {}, action) {
 switch(action.type) {
   case RECEIVE_QUESTIONS: return action.questions;
   case RECEIVE_ANSWER: return  {
        ...state,    
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat([action.username])
          }
        }
   };
   case RECEIVE_QUESTION: return {
    ...state,
    [action.question.id]: action.question
   };
   default: return state
 }
}