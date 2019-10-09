export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

import {_getUsers, _getQuestions} from '../utils/_DATA.js';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';

export function getInitialData() {
 return (dispatch) => {
  return Promise.all([
      _getUsers(),
      _getQuestions()]
  ).then(([users,questions]) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  });
 }
  
}