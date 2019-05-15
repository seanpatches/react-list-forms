import React, { PureComponent } from 'react';
import CreateColor from '../components/CreateColor.js';
import Colors from '../components/Colors.js';

export default class ColorList extends PureComponent {
  state = {
    colors: []
  }

  addColor = color => {
    this.setState(state => {
      return {
        colors: [...state.colors, color]
      };
    });
  }

  render() {
    const { colors } = this.state;
    return (
      <>
      <CreateColor addColor={this.addColor} />
      <Colors colors={colors} />
      </>
    );
  }
  
}
