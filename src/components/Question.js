import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Question extends Component {
 
    render() {
       const {userName, avatarURL, questionId, optionOne} = this.props;
        return (<div className="card">
            <div className="card-title">
               <span> {userName} asks:</span>
            </div>
            <div className="card-body">
                <div className='avatar'  style={{ backgroundImage:  `url(${avatarURL})`}}></div>
                <div>
                   
					 <div style={{width:"250px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>Would you rather {optionOne}?</div>
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
 	questionId: id,
    optionOne:state.questions[id].optionOne.text
	}
}

export default connect(mapStateToProps)(Question);