import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Question extends Component {
 
    render() {
       const {userName, avatarURL, questionId} = this.props;
        return (<div className="card">
            <div className="card-title">
               <span> {userName} asks:</span>
            </div>
            <div className="card-body">
                <div className='avatar'  style={{ backgroundImage:  `url(${avatarURL})`}}></div>
                <div>
                    Would you rather
					<span>...</span>
                     <Link className="btn" to={`/question/${questionId}`}> View Poll </Link>
                </div>
            </div>
        </div>);
    }
}

function mapStateToProps(state, {id}) {
const user = state.users[state.questions[id].author];
return {
 	userName:  user.name,
    avatarURL: user.avatarURL,
 	questionId: state.questions[id].id
	}
}

export default connect(mapStateToProps)(Question);