import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./hoc/layuot/layout";
import Quiz from "./containers/Quize/Quiz";
import QuizList from "./components/QuizList/QuizList";
import Auth from "./components/Auth/Auth";
import QuizCreator from "./components/QuizCreator/QuizCreator";

function App() {
  return (
    <Layout>
        <Switch>
            <Route patch={"/auth"} component={Auth} />
            <Route patch={"/quiz-creator"} component={QuizCreator} />
            <Route patch={"/quiz/:id"} component={Quiz} />
            <Route patch={"/"} component={QuizList} />
        </Switch>
    </Layout>
  );
}

export default App;
