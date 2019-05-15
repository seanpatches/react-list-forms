import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

export default function Album({ title, photos }){
  return (
    <section>
      <h2>{title}</h2>
      <Photos photos={photos}/>
    </section>
  );
}

Album.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};
