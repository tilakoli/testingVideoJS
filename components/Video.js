import React from "react";
import VideoPlayer from "react-video-js-player";
import video from "../public/vdo/index.mp4";
const Video = () => {
  return (
    <>
      <VideoPlayer src={video} width="720" height="420" />
    </>
  );
};

export default Video;
