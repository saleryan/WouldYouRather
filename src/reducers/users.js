import {RECEIVE_USERS} from '../actions/users';
import {RECEIVE_ANSWER, RECEIVE_QUESTION} from '../actions/shared';


export function users(state = {}, action) {
 switch(action.type) {
   case RECEIVE_USERS: return action.users;
   case RECEIVE_ANSWER: return {
        ...state,
        [action.username]: {
          ...state[action.username],
          answers: {
         	...state[action.username].answers,   
            [action.questionId]:action.answer
 	     }
        }
      };
     case RECEIVE_QUESTION: return {
    ...state,
     [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
    };
     default: return state
 }
}