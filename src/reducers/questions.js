import {RECEIVE_QUESTIONS} from '../actions/questions'


export function questions(state = {}, action) {
 switch(state) {
   case RECEIVE_QUESTIONS: return action.questions;
     default: return state
 }
}