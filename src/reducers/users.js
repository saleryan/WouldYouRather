import {RECEIVE_USERS} from '../actions/users'


export function users(state = {}, action) {
 switch(state) {
   case RECEIVE_USERS: return action.users;
     default: return state
 }
}