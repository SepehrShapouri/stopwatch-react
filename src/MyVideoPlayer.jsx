import { forwardRef } from "react";
const MyVideoPlayer = forwardRef(function MyVideoPlayer(props, ref) {
  const { src, type, width } = props;
  return (
    <video width={width} ref={ref}>
      <source src={src} type={type} />
    </video>
  );
});
export default MyVideoPlayer;
