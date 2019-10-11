import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionList extends Component {
    state = {
        questionIds: this.props.unanswered
    }

    setToAnswered = () => {
     this.setState({questionIds: this.props.answered}); 
    }
	
	setToUnAnswered = () => {
     this.setState({questionIds: this.props.unanswered}); 
    }

    render() {

        return (<div>
            <div style={{ display: "flex" }}>
                <button className="btn" autoFocus onClick={this.setToUnAnswered}>Unanswered Questions </button>
                <button className="btn" onClick={this.setToAnswered}>Answered Questions </button>
            </div>
            <ul className="questions">
                {this.state.questionIds
                    .map(id =>
                        <li key={id}> <Question key={id} id={id} /> </li>

                    )
                }


            </ul></div>);
    }
}

function mapStateToProps(state) {
    const user = state.users[state.authUser];

    const answered = [...Object.keys(user.answers)];
    const unanswered = [ ...Object.keys(state.questions)
                        .filter(question=> answered.indexOf(question)<0)];

    return {
        answered: answered,
        unanswered: unanswered
    }
}

export default connect(mapStateToProps)(QuestionList);