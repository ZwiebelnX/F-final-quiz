import React from 'react';
import PropTypes from 'prop-types';

import './TrainerItem.scss';
import { Popover, List, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import InfoItem from '../InfoItem/InfoItem';
import httpClient from '../../../../utils/https';
import urls from '../../../../utils/urls';

const { confirm } = Modal;

class TrainerItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleDelete = () => {
    const that = this;
    confirm({
      title: '确认删除',
      okText: '确认',
      cancelText: '取消',
      icon: <ExclamationCircleOutlined />,
      content: `确定要删除${this.props.data.id}.${this.props.data.name}?`,
      async onOk() {
        await httpClient.delete(urls.deleteTrainer(that.props.data.id));
        that.props.refreshFunc();
      },
      onCancel() {},
    });
  };

  render() {
    const popover = (
      <List
        dataSource={Object.entries(this.props.data)}
        renderItem={(item) => <InfoItem title={item[0]} detail={item[1]} />}
      />
    );
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="content-container" onClick={this.handleDelete}>
        <Popover content={popover}>
          <div className="content">
            {this.props.data.id}.{this.props.data.name}
          </div>
        </Popover>
      </div>
    );
  }
}

TrainerItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default TrainerItem;
