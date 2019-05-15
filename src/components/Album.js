import React from 'react';
import PropTypes from 'prop-types';

export default function Album({ title, photos }){

  return (
    <photos />
  );
}

Album.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};
