import React from 'react';


const Player = () => (
    <div className='player'>
       <div className="time-control">
           <p>Start time</p>
           <input type="range" />
           <p>End Time</p>
       </div>
    </div>
);

export default Player;