import React from 'react';
import LibrarySong from './library-song.component';

const Library = ({songs, setCurrentSong, audioRef, isPlaying}) => {
    return (
      <div className="library">
        <h2>Library</h2>
        <div className="library-songs">
          {songs.map((song) => (
            <LibrarySong
              key={song.id}
              songs={songs}
              setCurrentSong={setCurrentSong}
              song={song}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </div>
    );
}

export default Library;