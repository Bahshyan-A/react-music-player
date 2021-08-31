import React, {useState, useRef} from 'react';
import Player from './components/Player.component';
import Song from './components/Song.component';
import data from './util';
import Library from './components/Library.component';

//styles
import './styles/app.scss';


function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  });


  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration - e.target.currentTime;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const audioRef = useRef(null);


  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        isPlaying={isPlaying}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
