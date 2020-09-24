import React from 'react';
import TraineeItem from '../common/TraineeItem/TraineeItem';
import httpClient, { isSuccessRequest } from '../../../utils/https';
import urls from '../../../utils/urls';
import './TraineeList.scss'
import AddTraineeItem from '../common/AddTraineeItem/AddTraineeItem';

class TraineeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      traineeList: []
    };

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    httpClient.get(urls.getTraineeList())
      .then((response) => {
        if (isSuccessRequest(response.status)) {
          this.setState({ traineeList: response.data });
        }
      });
  }

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className='list-content'>
          {!!this.state.traineeList.length &&
          this.state.traineeList.map((item ) => <TraineeItem className='item' name={item.name} id={item.id} key={item.id} />
          )}
          {/* eslint-disable-next-line react/jsx-no-bind */}
        <AddTraineeItem refreshData={this.fetchData.bind(this)} />
        </div>
      </div>
    );
  }
}

TraineeList.propTypes = {};

export default TraineeList;
