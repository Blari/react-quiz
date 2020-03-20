import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import "./AnswersList.css";

const AnswersList = props => (
    <ul className={"answersList"}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key = {index}
                    answer = {answer}
                    state = {props.state ? props.state[answer.id] : null}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        })}
    </ul>
)

export default AnswersList;