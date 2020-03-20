import React, {Component} from "react";
import ActiveQuiz from "../../components/ActivQuze/ActiveQuiz";
import "./Quiz.css"

class Quiz extends Component {
    state = {
        answerState: null,
        activeQuestion: 0,
        quiz: [
            {
                question: "Какого цвета небо?",
                rightAnswer: 1,
                id: 1,
                answers: [
                    {text: "Синий", id: 1},
                    {text: "Черный", id: 2},
                    {text: "Красный", id: 3},
                    {text: "Зеленый", id: 4},
                ]
            },
            {
                question: "Сколько будет 2 + 2 * 2 ?",
                rightAnswer: 1,
                id: 2,
                answers: [
                    {text: "6", id: 1},
                    {text: "8", id: 2},
                    {text: "2", id: 3},
                    {text: "10", id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswer === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log("Finished")
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }


    render() {
        return (
            <div className={"quiz"}>
                <div className={"quiz-wrapper"}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;