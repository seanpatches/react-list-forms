import React from 'react';
import Colors from './Colors.js';

export default function App() {
  const colors = [
    { name: 'red', rgb: { red: 255, green: 0, blue: 0 } },
    { name: 'green', rgb: { red: 0, green: 255, blue: 0 } },
    { name: 'blue', rgb: { red: 0, green: 0, blue: 255 } },
  ];

  return <Colors colors={colors} />;
}
