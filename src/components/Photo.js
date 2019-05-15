import React from 'react';
import PropTypes from 'prop-types';

export default function Photo({ photo }){
  return (
    <img src={photo} />
  );
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};
