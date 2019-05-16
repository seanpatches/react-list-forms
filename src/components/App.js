import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import style from './App.css';

export default function App() {

  const [selected, updateSelect] = useState('home');

  const dropdown = {
    enter: 'Hey there, partner',
    drums: 'Boom Boom',
    space: 'wobble',
    cower: 'too much'
  };

  return (
    <section className={style.App}>
      <Sidebar>
        <a onClick={() => updateSelect('enter')}>Enter</a>
        <a onClick={() => updateSelect('drums')}>Drums</a>
        <a onClick={() => updateSelect('space')}>Space</a>
        <a onClick={() => updateSelect('cower')}>Cower</a>
      </Sidebar>
      <p>{dropdown[selected]}</p>
    </section>
  );
}
