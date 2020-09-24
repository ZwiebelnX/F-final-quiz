import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './page/mainPage/mainPage';
import CreateTrainee from './page/createTrainee/createTrainee';
import CreateTrainer from './page/createTrainer/createTrainer';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          <Switch>
            <Route path="/trainee/create" component={CreateTrainee} />
            <Route path="/trainer/create" component={CreateTrainer} />
            <Route component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
