// import React from "react";
// import YouTube from "react-youtube";

// export default class YoutubeVideo
// extends React.Component {
// render() {
// 	const opts = {
// 	height: "390",
// 	width: "640",
// 	playerVars: {
// 		autoplay: 1,
// 	},
// 	};

// 	return (
// 	<div>
// 		<h3>Codes Guide - Youtube</h3>
// 		<YouTube videoId={this.props.videoId}
// 			opts={opts} onReady={this._onReady} />
// 	</div>
// 	);
// }

// _onReady(event) {
// 	event.target.pauseVideo();
// }
// }

import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = (props) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  }

  return <YouTube className="youtube-card" videoId={props.videoId} opts={opts} onReady={onPlayerReady} />;
};

export default YoutubeVideo;
