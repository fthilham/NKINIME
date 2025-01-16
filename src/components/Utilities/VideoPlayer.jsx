"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ YoutubeId }) => {
  return (
    <div className="">
      <YouTube
        videoId={YoutubeId}
        onReady={(event) => event.target.pauseVideo()}
      />
    </div>
  );
};

export default VideoPlayer;
