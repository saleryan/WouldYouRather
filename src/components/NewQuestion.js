import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
        toHome: false
    }

    handleChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        this.setState((prevState) => ({ ...prevState, [name]: val }));
    }

    addQuestion = (e) => {
        e.preventDefault();
        const { optionOne, optionTwo } = this.state;
        this.props.dispatch(saveQuestion(optionOne, optionTwo, this.props.authUser));
        this.setState({
            optionOne: "",
            optionTwo: "",
            toHome: true
        });
    }

 disabled = () => {
     return !(this.state.optionOne && this.state.optionTwo);
   }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <form onSubmit={this.addQuestion} className="new-question">
                <h3 className="center header"> New Question </h3>
                <div className="new-question-body">
                    <p> Complete the question </p>
                    <strong> Would you rather ...</strong>
                    <input type="text" value={this.state.optionOne} name="optionOne" placeholder="Enter Option One Text Here" onChange={this.handleChange} />
                    <span className="border-center"> or </span>
                    <input type="text" value={this.state.optionTwo} name="optionTwo" placeholder="Enter Option Two Text Here" onChange={this.handleChange} />
                    <button disabled={this.disabled()} className="btn" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}
function mapStateToProps(state) {
    return {
        authUser: state.authUser
    }
}
export default connect(mapStateToProps)(NewQuestion);