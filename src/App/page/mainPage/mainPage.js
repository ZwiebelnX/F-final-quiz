import React from 'react';
import TeamList from '../../component/TeamList/TeamList';
import TraineeList from '../../component/TraineeList/TraineeList';
import TrainerList from '../../component/TrainerList/TrainerList';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <TeamList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
