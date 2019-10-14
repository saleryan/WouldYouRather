import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewQuestion extends Component {
 addQuestion = () => {
   
   
 }

 render() {
  return (
    <form onSubmit={this.addQuestion} className="new-question">
    <h3 className="center header"> New Question </h3>
    <div className="new-question-body">
    <p> Complete the question </p>
    <strong> Would you rather ...</strong>
    <input type="text" placeholder="Enter Option One Text Here"/>
	<span className="border-center"> or </span>
   	<input type="text" placeholder="Enter Option Two Text Here"/>
  	<button className="btn" type="submit">Submit</button>
   </div>
    </form>
    )
 }
}

export default connect()(NewQuestion);