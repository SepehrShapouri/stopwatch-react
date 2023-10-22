import { useRef } from "react";
import MyVideoPlayer from "./MyVideoPlayer";
const Video = () => {
  const ref = useRef(null);
  return (
    <div className="video">
      <MyVideoPlayer
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
      />
      <br />
      <div className="btnHolder">
      <button onClick={() => ref.current.play()}>play</button>
      <button onClick={() => ref.current.pause()}>pause</button>
      </div>
    </div>
  );
};

export default Video;
