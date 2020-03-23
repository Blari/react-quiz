import React from 'react';
import Layout from "./hoc/layuot/layout";
import Quiz from "./containers/Quize/Quiz";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import QuizList from "./components/QuizList/QuizList";
import Auth from "./components/Auth/Auth";
import QuizCreator from "./components/QuizCreator/QuizCreator";

function App() {
  return (
    <Layout>
        <Switch>
            <Router patch={"/auth"} component={Auth} />
            <Router patch={"/quiz-creator"} component={QuizCreator} />
            <Router patch={"/quiz/:id"} component={Quiz} />
            <Router patch={"/"} component={QuizList} />
        </Switch>
    </Layout>
  );
}

export default App;
