// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  handleClick = () => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12 },
    });
    // console.log(this.state.settings);
  };

  changeResolution = () => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          video: { ...this.state.settings.video, resolution: "720p" },
        },
      }
      //   console.log(this.state.settings.video)
    );
    // console.log(this.state.settings.video);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="bitrate">
          Bitrate {this.state.settings.bitrate}
        </button>
        <button onClick={this.changeResolution} className="resolution">
          Resolution {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
