import React from "react";
import AnswersList from "./AnswersList/AnswersList";
import "./ActiveQuiz.css";

const ActiveQuiz = props => (
    <div className={"activeQuiz"}>
        <p className={"question"}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswersList
            state = {props.state}
            answers = {props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz;