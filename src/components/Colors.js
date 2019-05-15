import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color.js';

export default function Colors({ colors }) {
  const colorList = colors.map((color) => {
    return (
      <li key={`${color.name}-${color.rgb}-${color.hex}`}>
        <Color name={color.name} rgb= {color.rgb} hex={color.hex} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};
