import React, { Component } from 'react';
import './App.scss';
import TraineeList from './component/TraineeList/TraineeList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <TraineeList />
      </div>
    );
  }
}

export default App;
