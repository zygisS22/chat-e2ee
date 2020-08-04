import React, { useRef, useEffect } from 'react';

const Notification = ({ play, audio }) => {
  const audioFile = useRef(null);
  const playAudio = () => {
    audioFile.current.play();
  };

  useEffect(() => {
    play && playAudio();
  }, [play, audio]);

  return (
    <audio ref={audioFile}>
      <source src={audio} />
    </audio>
  );
};
export default Notification;
