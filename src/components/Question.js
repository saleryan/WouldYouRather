import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question(props) {

    const { username, avatarURL, questionId, optionOne } = props;
    return (<div className="question">
        <div className="question-title">
            <span> {username} asks:</span>
        </div>
        <div className="question-body">
            <div className='avatar' style={{ backgroundImage: `url(${avatarURL})` }}></div>
            <div>

                <div className="text-ellipsis">Would you rather {optionOne}?</div>
                <Link className="btn" to={`/question/${questionId}`}> View Poll </Link>
            </div>
        </div>
    </div>);

}

function mapStateToProps(state, { id }) {
    const user = state.users[state.questions[id].author];
    return {
        username: user.name,
        avatarURL: user.avatarURL,
        questionId: id,
        optionOne: state.questions[id].optionOne.text
    }
}

export default connect(mapStateToProps)(Question);