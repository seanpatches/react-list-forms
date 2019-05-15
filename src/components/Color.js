import React from 'react';
import PropTypes from 'prop-types';

const hexFromColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase;
};

const hexFromRGB = (rgb) => {
  return `#${hexFromColor(rgb.red)}${hexFromColor(rgb.green)}${hexFromColor(rgb.blue)}`;
};

export default function Color({ name, rgb }){  
  const hex = hexFromRGB(rgb);
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name || hex} <div></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red - {rgb.red}</p>
        <p>Green - {rgb.green}</p>
        <p>Blue - {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  rgb: {
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  }
};

