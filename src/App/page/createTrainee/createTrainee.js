import React from 'react';
import { Button, Typography, Form, Input, notification } from 'antd';
import httpClient, { isSuccessRequest } from '../../../utils/https';
import urls from '../../../utils/urls';
import './createTrainee.scss';


const { Title } = Typography;

class CreateTrainee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRequesting : false
    };

  }

  submitNewTrainee = async (trainee) => {
    this.setState({isRequesting: true})
    try{
      const response = await httpClient.post(urls.addTrainee(), trainee);
      if (isSuccessRequest(response.status)) {
        notification.success({message: "创建成功！1秒后返回主页"})
        setTimeout(() => {
          this.props.history.push("/")
          notification.destroy()
        }, 1000)
      }
    } finally {
      this.setState({isRequesting: false})
    }
  }

  render() {
    return (
      <div>
        <div className="create-trainee-container">
          <Title>添加学员</Title>
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 15 }}
            onFinish={this.submitNewTrainee}
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: '请输入姓名！' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ required: true, message: '请输入邮箱！' }, { type: 'email', message: '邮箱不合法！' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="办公室"
              name="office"
              rules={[{ required: true, message: '请输入办公室' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="zoomId"
              name="zoomId"
              rules={[{ required: true, message: '请输入zoomId' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="github账号"
              name="github"
              rules={[{ required: true, message: '请输入github账号' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button className="create-trainee-form-button" type="primary" htmlType="submit" loading={this.state.isRequesting}>提交</Button>
              <Button className="create-trainee-form-button">取消</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

CreateTrainee.propTypes = {};

export default CreateTrainee;
