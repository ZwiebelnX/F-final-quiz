import React from 'react';
import * as propTypes from 'prop-types';
import './InfoItem.scss';

class InfoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="info-container">
        <span className="info-title">{this.props.title}</span> :{' '}
        <span className="info-detail">{this.props.detail}</span>
      </div>
    );
  }
}

InfoItem.propTypes = {
  title: propTypes.string,
  detail: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default InfoItem;
