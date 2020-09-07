import React from 'react';
import PropTypes from "prop-types";
import TraineeItem from '../TraineeItem/TraineeItem';

import './TeamItem.scss'

class TeamItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div className='team-container'>
        <span className='team-name'>{this.props.name}</span>
        <div className='trainee-list-container'>
          {this.props.traineeList.map(item => <TraineeItem name={item.name} id={item.id} key={item.id} /> )}
        </div>
      </div>
    );
  }
}

TeamItem.propTypes = {
  name: PropTypes.string,
  traineeList: PropTypes.arrayOf(PropTypes.object)
};

export default TeamItem;
