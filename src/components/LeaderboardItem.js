import React from 'react';
import { connect } from 'react-redux'

function LeaderboardItem({ username, avatarURL, askedQuestions, answeredQuestions }) {

    const score = askedQuestions + answeredQuestions;
    return (<div className="leaderboard-item">
        <div className='avatar' style={{ backgroundImage: `url(${avatarURL})` }}></div>
        <div className="leaderboard-info">
            <h2>{username}</h2>
            <div>
                <div className="leaderboard-info-question-container">
                    <span>Answered Questions</span>
                    <span className="leaderboard-info-question">{answeredQuestions}</span>
                </div>
                <div className="leaderboard-info-question-container">
                    <span>Created Questions</span>
                    <span className="leaderboard-info-question">{askedQuestions}</span>
                </div>
            </div>
        </div>
        <div className="score-container">
            <div className="score-title">score</div>
            <div className="score">{score}</div>
        </div>
    </div>);


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