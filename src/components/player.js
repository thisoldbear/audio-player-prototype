import React, { Component } from 'react'

class Player extends Component {
  constructor(props) {
    super(props)
    this.audio = React.createRef()
  }

  state = {
    // http://freemusicarchive.org/music/Pudge/
    src: 'Pudge_-_02_-_Here_Comes_The_Science_Bit.mp3',
    volume: 0.5,
    playing: false,
  }

  skipAudio = () => {
    this.setState({
      // http://www.obamadownloads.com/obama-mp3s.html
      src: 'victory-speech.mp3'
    }, () => {
      this.refs.audio.play()
    })
  }

  playAudio = () => {
    if (this.state.playing) {
      this.refs.audio.pause()
    } else {
      this.refs.audio.play()
    }

    this.setState((state) => ({
      ...state,
      playing: !state.playing
    }))
  }

  handleVolumeChange = (value) => {
    this.refs.audio.volume = value
  }

  componentDidMount() {
    this.refs.audio.volume = this.state.volume
  }

  render() {
    return (
      <div className="player">
        <audio ref="audio">
          <source src={this.state.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div>
          <button onClick={() => {
            this.playAudio()
          }}>{this.state.playing ? '⏸' : '▶'}</button>
        </div>
        <div>
          🔈
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={this.state.volume}
            onChange={(e) => {
              const value = e.target.value

              this.setState((state) => ({
                ...state,
                volume: value,
              }))

              this.handleVolumeChange(value)
            }
            }
          />
          {
            this.state.volume * 100
          }
        </div>
        <div>
          <button onClick={() => {
            this.skipAudio()
          }}>Skip</button>
        </div>
      </div>
    )
  }
}

export default Player
