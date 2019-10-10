import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';

class QuestionList extends Component {
 render() {
  return  (<ul className="questions">
           {this.props.questionIds
           			.map(id => 
            			<li key={id}> <Question key={id} id={id} /> </li>
          				)
           }
          
          
          </ul>) ;
 	}
}

function mapStateToProps(state) {
 const questionIds = Object.keys(state.questions);
  return {
    questionIds
  }
}

export default connect(mapStateToProps)(QuestionList);