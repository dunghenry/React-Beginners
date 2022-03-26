import React, {forwardRef, useRef, useImperativeHandle} from 'react';
import video from '../videos/video.mp4';

const Video = (props, ref) => {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }))
  return (
      <video ref={videoRef} src={ video } width="280" height="80%" loop/>
  )
}

export default forwardRef(Video);