import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionList extends Component {
 render() {
  return  (<h1> Question List </h1>) ;
 }
}


export default connect()(QuestionList);