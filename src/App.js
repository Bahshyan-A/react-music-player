import React from 'react';
import Player from './components/Player.component';
import Song from './components/Song.component';

//styles
import './styles/app.scss';


function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
