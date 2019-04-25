import React, { Component, useState } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  state = {
    // http://freemusicarchive.org/music/Pudge/
    src: 'Pudge_-_02_-_Here_Comes_The_Science_Bit.mp3'
  }

  skipAudio = () => {
    this.setState({
      // http://www.obamadownloads.com/obama-mp3s.html
      src: 'victory-speech.mp3'
    }, () => {
      this.refs.audio.play();
    })
  }

  render() {
    return (
      <div>
        <audio controls ref="audio" key={this.state.src}>
          <source src={this.state.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={() => {
          this.skipAudio()
        }}>Skip</button>
      </div>
    )
  }
};

export default Player;
