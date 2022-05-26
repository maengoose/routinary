import { useEffect, useRef, useState } from 'react';

import * as Styled from './style';

import Rain from './WhiteNoise/Rain.mp3';

const useAudio = (url: any): [boolean, () => void] => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => setPlaying(!playing);

  useEffect(() => {
    if (!audio.current) {
      return;
    }

    if (playing) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
  }, [playing]);

  return [playing, togglePlaying];
};

const Music: React.VFC = () => {
  const [playing, togglePlaying] = useAudio(Rain);

  return (
    <Styled.RainMusicButton
      playing={playing}
      onClick={() => {
        togglePlaying()
      }}
    >
      Rain
    </Styled.RainMusicButton>
  )
};

export default Music;
