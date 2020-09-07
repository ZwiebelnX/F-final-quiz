import React from 'react';
import TeamItem from '../common/TeamItem/TeamItem';
import httpClient, { isSuccessRequest } from '../../../utils/https';
import { urls } from '../../../utils/urls';

import "./TeamList.scss"

class TeamList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamData: [],

    };
  }

  componentDidMount() {
    httpClient.get(urls.getTeamList()).then(response => {
      if (isSuccessRequest(response.status)) {
        this.setState({ teamData: response.data})
      }
    })
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
    return (
      <div>
        <div className='team-list-head'>
          <span className='team-list-title'>分组列表</span>
          <button className='split-team-button' type='button' onClick={this.splitBtnClickHandler.bind(this)}>分组成员</button>
        </div>
        {!!this.state.teamData.length &&
        this.state.teamData.map(item => <TeamItem name={item.name} traineeList={item.traineeList} key={item.name}/>)}
      </div>

    );
  }
}

TeamList.propTypes = {};

export default TeamList;
