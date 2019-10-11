import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Question extends Component {
 
    render() {
       const {user, question} = this.props;
        return (<div className="card">
            <div className="card-title">
               <span> {user.name} asks:</span>
            </div>
            <div className="card-body">
                <div className='avatar'  style={{ backgroundImage:  `url(${user.avatarURL})`}}></div>
                <div>
                    Would you rather
					<span>...</span>
                     <Link className="btn" to={`/question/${question.id}`}> View Poll </Link>
                </div>
            </div>
        </div>);
    }
}

function mapStateToProps(state, {id}) {
return {
 user:  state.users[state.questions[id].author],
 question: state.questions[id]
                           
}
}

export default connect(mapStateToProps)(Question);