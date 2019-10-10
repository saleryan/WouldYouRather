import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
 
    render() {
       const {user} = this.props;
        return (<div className="card">
            <div className="card-title">
               <span> {user.name} asks:</span>
            </div>
            <div className="card-body">
                <div className='avatar'  style={{ backgroundImage:  `url(${user.avatarURL})`}}></div>
                <div>
                    Would you rather
					<span>...</span>
                    <button className="btn">View Poll</button>
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