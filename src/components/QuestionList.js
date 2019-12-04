import React, { useState } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

function QuestionList({ answered, unanswered }) {
  
    const [isAnswered, setIsAnswered] = useState(false);

    const setToAnswered = () => {
        setIsAnswered(true);
    }

    const setToUnAnswered = () => {
        setIsAnswered(false);
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                <a className={!isAnswered ? "btn active" : "btn"}
                    onClick={setToUnAnswered}>Unanswered Questions
                 </a>
                <a className={isAnswered ? "btn active" : "btn"}
                    onClick={setToAnswered}>Answered Questions
                 </a>
            </div>

            <ul className="questions">
                {isAnswered && answered
                    .map(id =>
                        <li key={id}> <Question key={id} id={id} /> </li>
                    )
                }
                {!isAnswered && unanswered
                    .map(id =>
                        <li key={id}> <Question key={id} id={id} /> </li>
                    )
                }
            </ul>
        </div>
    );

}

function mapStateToProps(state) {
    const user = state.users[state.authUser];

    const answered = [...Object.keys(user.answers)]
        .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);
    const unanswered = [...Object.keys(state.questions)
        .filter(question => answered.indexOf(question) < 0)]
        .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);

    return {
        answered: answered,
        unanswered: unanswered
    }
}

export default connect(mapStateToProps)(QuestionList);