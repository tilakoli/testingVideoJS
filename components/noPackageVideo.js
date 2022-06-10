import React from "react";
import video from "../public/vdo/video.mp4";
const noPackageVideo = () => {
  return (
    <div>
      <h1>noPackageVideo</h1>
      {/* <video className="video" src={video} autoPlay loop controls></video>
      <video
        autoPlay
        loop
        muted
        src="https://www.pexels.com/es-es/video/flores-ramo-de-flores-boda-peonia-4747643/"
        type="video/mp4"
      /> */}

      <video controls loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>

      <div className="video-background">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      {/* <video className="fixed z-\[-1\]" autoPlay muted controls loop>
        <source
          src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
          type="video/mp4"
        />
      </video> */}
    </div>
  );
};

export default noPackageVideo;
