import React, { Component } from 'react';
import LeaderboardItem from './LeaderboardItem';
import { connect } from 'react-redux';

class Leaderboard extends Component {
    render() {
        return (<div>{
            this.props.ids.map(id => <LeaderboardItem key={id} id={id} />)
        }</div>)
    }
}

function mapStateToProps(state) {
   const users = Object.keys(state.users);
    return {
        ids: users
            .sort((a, b) => (Object.keys(state.users[b].answers).length + state.users[b].questions.length) 
                  			- (Object.keys(state.users[a].answers).length + state.users[a].questions.length) )
    }
}

export default connect(mapStateToProps)(Leaderboard);