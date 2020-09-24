import React from 'react';
import TeamList from '../../component/TeamList/TeamList';
import TraineeList from '../../component/TraineeList/TraineeList';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div>
        <TeamList />
        <TraineeList />
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
