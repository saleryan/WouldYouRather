import React, { Component } from 'react';
import { connect } from 'react-redux'

class LeaderboardItem extends Component {
    render() {
        const { username, avatarURL, askedQuestions, answeredQuestions } = this.props;
        const score = askedQuestions + answeredQuestions;
        return (<div className="leaderboard-item">
            <div className='avatar' style={{ backgroundImage: `url(${avatarURL})` }}></div>
            <div>
                <strong>{username}</strong>
				<div>
                <div><span>Answered Questions</span> <span>{answeredQuestions}</span></div>
                <div><span>Created Questions</span><span>{askedQuestions}</span></div>
				</div>
            </div>
            <div>
                <div>score</div> 
				<div>{score}</div>
            </div>
        </div>);

    }
}

function mapStateToProps(state, { id }) {


    const user = state.users[id];
    return {
        username: user.name,
        answeredQuestions: Object.keys(user.answers).length,
        askedQuestions: user.questions.length,
        avatarURL: user.avatarURL
    }
}

export default connect(mapStateToProps)(LeaderboardItem);