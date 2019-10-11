import {RECEIVE_USERS} from '../actions/users';
import {RECEIVE_ANSWER} from '../actions/shared';


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
     default: return state
 }
}