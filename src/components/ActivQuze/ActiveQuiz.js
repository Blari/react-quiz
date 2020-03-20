import React from "react";
import AnswersList from "./AnswersList/AnswersList";
import "./ActiveQuiz.css";

const ActiveQuiz = props => (
    <div className={"activeQuiz"}>
        <p className={"question"}>
            <span>
                <strong>2.</strong>&nbsp;
                How Are You?
            </span>
            <small>4 из 12</small>
        </p>

        <AnswersList
            answers = {props.answers}
        />
    </div>
)

export default ActiveQuiz;