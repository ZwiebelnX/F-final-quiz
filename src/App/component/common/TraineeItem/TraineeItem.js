import React from 'react';
import PropTypes from 'prop-types';

import './TraineeItem.scss';
import { Popover, List } from 'antd';
import InfoItem from './component/InfoItem/InfoItem';

class TraineeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const popover = (
      <List
        dataSource={Object.entries(this.props.data)}
        renderItem={(item) => <InfoItem title={item[0]} detail={item[1]} />}
      />
    );
    return (
      <div className="content-container">
        <Popover content={popover}>
          <div className="content">
            {this.props.data.id}.{this.props.data.name}
          </div>
        </Popover>
      </div>
    );
  }
}

TraineeItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    office: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
    zoomId: PropTypes.string,
  }),
};

export default TraineeItem;
