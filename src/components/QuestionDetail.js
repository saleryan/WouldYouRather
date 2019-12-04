import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveAnswer } from '../actions/shared';
import { Redirect } from 'react-router-dom';

function QuestionDetail({ dispatch, authUserId, questionId, username, avatarURL, optionOne, optionTwo, totalVotes, answer }) {
    const [value, setValue] = useState('');

    const answerQuestion = (e) => {
        e.preventDefault();
        dispatch(saveAnswer(authUserId, questionId, value));

    }

    const disabled = () => {
        return !value
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
    }

    if (!questionId) {
        return <Redirect to="/nomatch" />
    }

    const optionOnePercent = parseInt(optionOne.votes.length / totalVotes * 100, 10);
    const optionTwoPercent = parseInt(optionTwo.votes.length / totalVotes * 100, 10);
    const optionOneCount = `${optionOne.votes.length} out of ${totalVotes} votes`;
    const optionTwoCount = `${optionTwo.votes.length} out of ${totalVotes} votes`;
    const avatarURLCss = `url(${avatarURL})`;

    return (<div className="question">
        <div className="question-title">
            <span> {username} asks:</span>
        </div>
        <div className="question-body">

            <div className='avatar' style={{ backgroundImage: avatarURLCss }}></div>

            {!answer ? <div>
                <form className="detail-form" onSubmit={answerQuestion}>
                    <strong>Would you rather ...</strong>
                    <p />
                    <input name="answer" type="radio" id="optionOne" value="optionOne" onChange={handleChange} />
                    <span>{optionOne.text}</span>

                    <input type="radio" name="answer" id="optionTwo" value="optionTwo" onChange={handleChange} />
                    <span>{optionTwo.text}</span>
                    <button className="btn" type="submit" disabled={disabled()}>Submit</button>
                </form>
            </div> :
                <div className="results-info">

                    <h3>Results:</h3>
                    <div className="result" style={{ borderWidth: "optionOne" === answer ? "5px" : "1px" }}>
                        {"optionOne" === answer && <div className="voted"> Your vote</div>}
                        <strong>Would you rather {optionOne.text}?</strong>
                        <div className="progress-bar">
                            <div style={{ width: optionOnePercent + '%' }} />
                        </div>
                        <strong className="center">{optionOneCount}</strong>
                    </div>
                    <div className="result" style={{ borderWidth: "optionTwo" === answer ? "5px" : "1px" }}>
                        {"optionTwo" === answer && <div className="voted"> Your vote</div>}
                        <strong> Would you rather {optionTwo.text}?</strong>
                        <div className="progress-bar">
                            <div style={{ width: optionTwoPercent + '%' }} />
                        </div>
                        <strong className="center">{optionTwoCount}</strong>

                    </div>
                </div>}
        </div>
    </div>);

}

function mapStateToProps(state, props) {

    const authUser = state.users[state.authUser];
    const { id } = props.match.params;
    const question = state.questions[id];

    if (!question) {
        return {
            authUserId: authUser.id,
            questionId: null
        };
    }
    const user = state.users[question.author];
    return {
        authUserId: authUser.id,
        username: user.name,
        avatarURL: user.avatarURL,
        questionId: id,
        optionOne: { ...question.optionOne },
        optionTwo: { ...question.optionTwo },
        totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length,
        answer: authUser.answers[question.id]
    }
}

export default connect(mapStateToProps)(QuestionDetail);


