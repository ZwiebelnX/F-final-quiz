import React from 'react';
import PropTypes from 'prop-types';

import './TraineeItem.scss';
import { Popover, List, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import InfoItem from '../InfoItem/InfoItem';
import httpClient from '../../../../utils/https';
import urls from '../../../../utils/urls';

// TODO feedback：TraineeItem和TrainerItem两个组件有很多重复逻辑，可以抽象、提取成公共组件
const { confirm } = Modal;
class TraineeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleDelete = () => {
    // TODO feedback: onOk可以使用arrow function来解决this binding的问题
    const that = this;
    confirm({
      title: '确认删除',
      okText: '确认',
      cancelText: '取消',
      icon: <ExclamationCircleOutlined />,
      content: `确定要删除${this.props.data.id}.${this.props.data.name}?`,
      async onOk() {
        await httpClient.delete(urls.deleteTrainee(that.props.data.id));
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

TraineeItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    office: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
    zoomId: PropTypes.string,
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  refreshFunc: PropTypes.func,
};

export default TraineeItem;
