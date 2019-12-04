import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom'

function NewQuestion({ authUser, dispatch }) {

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [toHome, setToHome] = useState(false);

    const handleChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        if (name === "optionOne") {
            setOptionOne(val);
        } else {
            setOptionTwo(val);
        }
    }

    const addQuestion = (e) => {
        e.preventDefault();

        dispatch(saveQuestion(optionOne, optionTwo, authUser));
        setOptionOne("");
        setOptionTwo("");
        setToHome(true);
    }

    const disabled = () => {
        return !(optionOne && optionTwo);
    }

    if (toHome === true) {
        return <Redirect to='/' />
    }
    return (
        <form onSubmit={addQuestion} className="new-question">
            <h3 className="center header"> New Question </h3>
            <div className="new-question-body">
                <p> Complete the question </p>
                <strong> Would you rather ...</strong>
                <input type="text"
                    value={optionOne} name="optionOne"
                    placeholder="Enter Option One Text Here"
                    onChange={handleChange} />
                <span className="border-center"> or </span>
                <input type="text"
                    value={optionTwo}
                    name="optionTwo"
                    placeholder="Enter Option Two Text Here"
                    onChange={handleChange} />
                <button
                    disabled={disabled()}
                    className="btn"
                    type="submit">
                    Submit
                    </button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps)(NewQuestion);