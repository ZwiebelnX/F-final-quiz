import React, { Component } from 'react';
import './App.scss';
import TraineeList from './component/TraineeList/TraineeList';
import TeamList from './component/TeamList/TeamList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <TeamList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
