import React, {Component} from "react";
import ActiveQuiz from "../../components/ActivQuze/ActiveQuiz";
import "./Quiz.css"

class Quiz extends Component {
    state = {
        quiz: [
            {
                answers: [
                    {text: "Вопрос 1"},
                    {text: "Вопрос 2"},
                    {text: "Вопрос 3"},
                    {text: "Вопрос 4"},
                ]
            }
        ]
    }

    render() {
        return (
            <div className={"quiz"}>
                <div className={"quiz-wrapper"}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;