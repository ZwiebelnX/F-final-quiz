import React from 'react';
import TeamList from '../../component/TeamList/TeamList';
import TraineeList from '../../component/TraineeList/TraineeList';
import TrainerList from '../../component/TrainerList/TrainerList';

// TODO feedback：组件名尽量和文件命名一致首字母大写，不然会被当成utils或者helpers文件
class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // TODO feedback：teamData，traineeList、trainerList数据应该提取到这个组件中，分组操作会引起这3个数据的变化
  render() {
    return (
      // TODO feedback：可以使用main标签
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
