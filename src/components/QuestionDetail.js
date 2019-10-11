import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAnswer } from '../actions/shared'

class QuestionDetail extends Component {
    state={
    	value:this.props.optionOne
    }
  	answerQuestion = (e) => {
      e.preventDefault();
      this.props.dispatch(saveAnswer(this.props.authUserId, this.props.questionId, this.state.value));
            
    }
	handleChange=(e) => {
      const value = e.target.value;
      this.setState({value: value});
    }

    render() {
        const { userName, avatarURL, optionOne, optionTwo, totalVotes, answer } = this.props;
        return (<div className="card">
                <div className="card-title">
                    <span> {userName} asks:</span>
                </div>
                <div className="card-body">

                    <div className='avatar' style={{ backgroundImage: `url(${avatarURL})` }}></div>
					{!answer?<div>
                        <form className="detail-form" onSubmit={this.answerQuestion}>
                            Would you rather ...
							<p/>
					        <input name="answer" type="radio" id="optionOne" value="optionOne" onChange={this.handleChange}/>
							<span>{optionOne.text}</span>
							<p/>
						    <input type="radio" name="answer" id="optionTwo" value="optionTwo"  onChange={this.handleChange}/>
							<span>{optionTwo.text}</span>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>:<div> 
				     <span>Results</span>
					 <p/>
					 <span style={{backgroundColor: "optionOne"===answer?"red":"white" }}>Would you rather {optionOne.text}?</span>
					 <p/>
					 <span style={{backgroundColor: "optionTwo"===answer?"red":"white" }}> Would you rather {optionTwo.text}?</span>
					</div>}
                </div>
            </div>);
    }
}

function mapStateToProps(state,  props ) {
    const { id } = props.match.params
    const question = state.questions[id];
	const user = state.users[question.author];
    const authUser = state.users[state.authUser];
	return {
      authUserId: authUser.id,
      userName:user.author,
      avatarURL:user.avatarURL,
      questionId: id,
	  optionOne: {...question.optionOne},
      optionTwo: {...question.optionTwo},
      totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length,
      answer: authUser.answers[question.id]
	}
}

export default connect(mapStateToProps)(QuestionDetail);


