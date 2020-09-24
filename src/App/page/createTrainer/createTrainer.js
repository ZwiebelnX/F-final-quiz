import React from 'react';
import { Button, Typography, Form, Input, notification } from 'antd';
import httpClient, { isSuccessRequest } from '../../../utils/https';
import urls from '../../../utils/urls';
import './createTrainer.scss';

const { Title } = Typography;

class CreateTrainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRequesting: false,
    };
  }

  submitNewTrainer = async (trainer) => {
    this.setState({ isRequesting: true });
    try {
      const response = await httpClient.post(urls.addTrainer(), trainer);
      if (isSuccessRequest(response.status)) {
        notification.success({ message: '创建成功！1秒后返回主页' });
        setTimeout(() => {
          this.props.history.push('/');
          notification.destroy();
        }, 1000);
      }
    } finally {
      this.setState({ isRequesting: false });
    }
  };

  render() {
    return (
      <div>
        <div className="create-trainee-container">
          <Title>添加讲师</Title>
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} onFinish={this.submitNewTrainer}>
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: '请输入姓名！' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                className="create-trainee-form-button"
                type="primary"
                htmlType="submit"
                loading={this.state.isRequesting}
              >
                提交
              </Button>
              <Button className="create-trainee-form-button">取消</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

CreateTrainer.propTypes = {};

export default CreateTrainer;
