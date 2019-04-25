import React from 'react';

export default () => {
  return (
    <audio controls>
      {/* http://freemusicarchive.org/music/Pudge/ */}
      <source src="Pudge_-_02_-_Here_Comes_The_Science_Bit.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
};
