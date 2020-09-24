import React from 'react';
import TeamItem from '../common/TeamItem/TeamItem';
import httpClient, { isSuccessRequest } from '../../../utils/https';
import urls from '../../../utils/urls';

import './TeamList.scss';

class TeamList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamData: []

    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    httpClient.get(urls.getTeamList()).then(response => {
      if (isSuccessRequest(response.status)) {
        this.setState({ teamData: response.data });
      }
    });
  }

  splitBtnClickHandler() {
    const that = this;
    httpClient.post(urls.splitTraineeIntoTeam()).then(response => {
      if (isSuccessRequest(response.status)) {
        that.setState({ teamData: response.data });
      }
    });
  }


  render() {
    let teamDisplay;
    if (this.state.teamData.length === 0) {
      teamDisplay = <div className='non-data-placeholder'>暂无记录</div>;
    } else {
      // eslint-disable-next-line react/jsx-no-bind
      teamDisplay = this.state.teamData.map((item, index) => <TeamItem refreshData={this.fetchData.bind(this)} name={item.name}
                                                         index={index} traineeList={item.traineeList}
                                                         key={item.name}/>)
    }
    return (
      <div>
        <div className='team-list-head'>
          <span className='team-list-title'>分组列表</span>
          <button className='split-team-button' type='button' onClick={this.splitBtnClickHandler.bind(this)}>分组成员
          </button>
        </div>
        {teamDisplay}
      </div>

    );
  }
}

TeamList.propTypes = {};

export default TeamList;
