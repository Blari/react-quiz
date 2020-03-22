import React, {Component} from "react";
import ActiveQuiz from "../../components/ActivQuze/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import "./Quiz.css"

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
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
        const results = this.state.results

        if (question.rightAnswer === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log("Finished")
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            answerState: null,
            activeQuestion: 0
        })
    }


    render() {
        return (
            <div className={"quiz"}>
                <div className={"quiz-wrapper"}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ?
                        <FinishedQuiz
                        results = {this.state.results}
                        quiz = {this.state.quiz}
                        onRetry = {this.retryHandler}
                        />
                        :
                        <ActiveQuiz
                            answers = {this.state.quiz[this.state.activeQuestion].answers}
                            question = {this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;