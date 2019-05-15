import React from 'react';
import Photo from './Photo.js';
import PropTypes from 'prop-types';

export default function Photos({ photo }){
  return (
    <img src={photo} />
  );
}

Photos.propTypes = {
  photo: PropTypes.string.isRequired
};
