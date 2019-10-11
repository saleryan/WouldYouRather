import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetail extends Component {
    render() {
        const { userName, avatarURL, optionOne, optionTwo, totalVotes, userAnswered } = this.props;
        return (<div className="card">
                <div className="card-title">
                    <span> {userName} asks:</span>
                </div>
                <div className="card-body">

                    <div className='avatar' style={{ backgroundImage: `url(${avatarURL})` }}></div>
					{!userAnswered?<div>
                        <form>
                            Would you rather ...
					        
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>:<div> results</div>}
                </div>
            </div>);
    }
}

function mapStateToProps(state,  props ) {
    const { id } = props.match.params
	const user = state.users[state.authUser];
    const question = state.questions[id];
	return {
      userName:  user.name,
      avatarURL: user.avatarURL,
      questionId: state.questions[id].id,
	  optionOne: {...question.optionOne},
      optionTwo: {...question.optionTwo},
      totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length,
      userAnswered: user.questions.indexOf(question.id)>=0
	}
}

export default connect(mapStateToProps)(QuestionDetail);


