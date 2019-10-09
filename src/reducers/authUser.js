import {SET_AUTHUSER} from '../actions/authUser'


export function authUser(state = null, action) {
 switch(action.type) {
   case SET_AUTHUSER: return action.authUser;
     default: return state
 }
}