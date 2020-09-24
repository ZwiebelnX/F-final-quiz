import React from 'react';
import PropTypes from 'prop-types';
import TraineeItem from '../TraineeItem/TraineeItem';

import './TeamItem.scss';
import httpClient from '../../../../utils/https';
import urls from '../../../../utils/urls';

class TeamItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      name: ''
    };
  }

  nameClickHandler() {
    this.setState({ isEditing: true });
  }

  inputEnterHandler(key) {
    if (key.keyCode === 13) {
      const requestData = { name: this.state.name };
      httpClient.post(urls.changeTeamName(this.props.index), requestData).then(() => {
          this.props.refreshData();
          this.setState({
            isEditing: false,
            name: ''
          });
        }
      );
    }
  }

  inputChangeHandler(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    let display;
    if (this.state.isEditing) {
      display = <input className='team-name-input' placeholder="请输入队名" value={this.state.name}
                       onChange={this.inputChangeHandler.bind(this)}
                       onKeyDown={this.inputEnterHandler.bind(this)}/>;
    } else {
      display = <button type='button'
                        className='team-name-button'
                        onClick={this.nameClickHandler.bind(this)}>
        {this.props.name}</button>;
    }
    return (
      <div className='team-container'>
        <div>{display}</div>
        <div className='trainee-list-container'>
          {this.props.traineeList.map(item => <TraineeItem name={item.name} id={item.id} key={item.id}/>)}
        </div>
      </div>
    );
  }
}

TeamItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  traineeList: PropTypes.arrayOf(PropTypes.object),
  refreshData: PropTypes.func
};

export default TeamItem;
