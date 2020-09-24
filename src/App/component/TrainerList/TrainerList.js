import React from 'react';
import TrainerItem from '../common/TrainerItem/TrainerItem';
import httpClient, { isSuccessRequest } from '../../../utils/https';
import urls from '../../../utils/urls';

class TrainerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trainerList: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    httpClient.get(urls.getTrainersUngroupedList()).then((response) => {
      if (isSuccessRequest(response.status)) {
        this.setState({ trainerList: response.data });
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>讲师列表</h1>
          <div className="list-content">
            {!!this.state.trainerList.length &&
              this.state.trainerList.map((item) => (
                <TrainerItem
                  className="item"
                  data={item}
                  key={item.id}
                  refreshFunc={this.fetchData}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

TrainerList.propTypes = {};

export default TrainerList;
