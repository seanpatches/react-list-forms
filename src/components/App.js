import React from 'react';
import Album from './Album';
import billy1 from '../assets/billy1.jpg';
import billy2 from '../assets/billy2.jpg';
import billy3 from '../assets/billy3.jpg';
import billy4 from '../assets/billy4.jpg';

export default function App() {
  const photos = [
    billy1,
    billy2,
    billy3,
    billy4
  ];
  
  return <Album title="Wild Bill String" photos={photos}/>;
}


