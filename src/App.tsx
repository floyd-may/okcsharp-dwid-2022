import React from 'react';
import './App.css';
import { FewtComponent } from './FewtComponent';

const exampleFewt = [
  { name: 'Magno', callries: 54 },
  { name: 'Gurps', callries: 86 },
  { name: 'Blanabba', callries: 32 },
  { name: 'Ornj', callries: 76 },
]

function App() {
  return (
    <div className="app">
      <FewtComponent data={exampleFewt} />
    </div>
  );
}

export default App;
