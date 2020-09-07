import React from 'react';
import PropTypes from 'prop-types';


import './AddTraineeItem.scss';
import httpClient from '../../../../utils/https';
import { urls } from '../../../../utils/urls';

class AddTraineeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      name: ''
    };

  }

  onInputClickHandler() {
    this.setState({ isEditing: true });
  }

  onInputEnterHandler(key) {
    if (key.keyCode === 13) {
      const requestData = { name: this.state.name };
      httpClient.post(urls.addTrainee(), requestData).then(() => {
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
    if (!this.state.isEditing) {
      return (
        <div>
          <button type='button' className='add' onClick={this.onInputClickHandler.bind(this)}>+ 添加成员</button>
        </div>
      );
    }
    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <input value={this.state.name} className='add' autoFocus="autofocus"
               onChange={this.inputChangeHandler.bind(this)} onKeyDown={this.onInputEnterHandler.bind(this)}/>
      </div>
    );
  };
}

AddTraineeItem.propTypes = {
  refreshData: PropTypes.func
};

export default AddTraineeItem;
