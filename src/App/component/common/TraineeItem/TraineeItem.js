import React from 'react';
import PropTypes from "prop-types";

import "./TraineeItem.scss"

class TraineeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div className='content-container'>
        <div className='content'>{this.props.id}.{this.props.name}</div>
      </div>
    );
  }
}

TraineeItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

export default TraineeItem;
