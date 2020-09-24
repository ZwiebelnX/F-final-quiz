import React from 'react';
import TraineeItem from '../common/TraineeItem/TraineeItem';
import httpClient, { isSuccessRequest } from '../../../utils/https';
import urls from '../../../utils/urls';
import './TraineeList.scss';

class TraineeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      traineeList: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    httpClient.get(urls.getTraineesUngroupedList()).then((response) => {
      if (isSuccessRequest(response.status)) {
        this.setState({ traineeList: response.data });
      }
    });
  };

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className="list-content">
          {!!this.state.traineeList.length &&
            this.state.traineeList.map((item) => (
              <TraineeItem
                className="item"
                data={item}
                key={item.id}
                refreshFunc={this.fetchData}
              />
            ))}
        </div>
      </div>
    );
  }
}

TraineeList.propTypes = {};

export default TraineeList;
