import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';

class QuestionList extends Component {
 state = {
  questionIds:this.props.answered 
 }

 render() {
  
  return  (<div>
           <div style={{display: "flex"}}>
           	<button className="btn" onClick={()=> this.setState({questionIds: this.props.unanswered})}>Unanswered Questions </button>
           	<button className="btn" onClick={()=> this.setState({questionIds: this.props.answered})}>Answered Questions </button>
           </div>
           <ul className="questions">
           {this.state.questionIds
           			.map(id => 
            			<li key={id}> <Question key={id} id={id} /> </li>
           
			)
           }
          
          
          </ul></div>) ;
 	}
}

function mapStateToProps(state) {
  const user = state.users[state.authUser];
 
  const answered = [];
  const unanswered =[];
  Object.keys(state.questions)
   .forEach(questionId => {
     if (user.answers.hasOwnProperty(questionId) ) {
       answered.push(questionId);
     } else {
       unanswered.push(questionId);
     }
   });                                                      
                                                        
  return {
    answered: answered,
    unanswered: unanswered
  }
}

export default connect(mapStateToProps)(QuestionList);