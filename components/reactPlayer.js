import React from "react";
import ReactPlayer from "react-player/lazy"; // better to use the lazy loader
// import video from "../public/vdo/video.mp4";
// // Lazy load the YouTube player
// import ReactPlayer from "react-player/lazy";
const ReactPlayerComponent = () => {
  // the video doesnt play automatically if the video isnt muted (Chrome Policy!)
  return (
    <ReactPlayer
      playIcon={<div className="play-icon">play</div>}
      controls={false}
      url="https://www.youtube.com/watch?v=vsRTRMsMw7w&ab_channel=Lessonsin30s"
      width="100vw"
      height="100vh"
      muted={true}
      playing={true}
    />
  );
};
export default ReactPlayerComponent;

/**
 * DOCS: https://github.com/CookPete/react-player
 */
