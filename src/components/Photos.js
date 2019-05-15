import React from 'react';
import Photo from './Photo.js';
import PropTypes from 'prop-types';

export default function Photos({ photos }){
  photos.map(photo => {
    return (
      // <Photo photo={photo}/>
    );
  });
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};
