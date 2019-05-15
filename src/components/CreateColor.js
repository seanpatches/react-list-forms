import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }

  state = {
    name: '',
    color: '#000000'
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    const { name, color } = this.state;
    this.props.addColor({ name, hex: color });
  }

  render() {
    const { name, color } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <input name="name" value={name} onChange={this.changeHandler}></input>
        <input name="color" value={color} onChange={this.changeHandler}></input>
        <button>Add Color</button>
      </form>
    );
  }
}
