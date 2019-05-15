import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextFormatter extends PureComponent {
  state = {
    text: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.text;
    });
  };

  render(){
    return (
      <>
      <input type="text" value={this.state.text} onChange={this.handleChange} />
      <p text={this.state.text} />
      </>
    );
  }
}
