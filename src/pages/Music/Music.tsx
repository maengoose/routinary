import { useEffect, useRef, useState } from 'react';
import * as Styled from './style';
import Rain from './WhiteNoise/Rain.mp3';

const Music: React.VFC = () => {
  // const audio = new Audio(Rain);

  // const handleRainMusicButton = () => {
  //   audio.play();
  // }

  const useAudio = (url: any) => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (audio.current) {
      playing ? audio.current.play() : audio.current.pause(); 
    }
  },
  [playing]);

  return [toggle];
  };
  
  const [toggle] = useAudio(Rain);

  return (
    <Styled.RainMusicButton
      onClick={toggle}
    >
      Rain
    </Styled.RainMusicButton>
  )
};

export default Music;
