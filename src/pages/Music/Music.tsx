import { useEffect, useRef, useState } from 'react';

import * as Styled from './style';

import Rain from './WhiteNoise/Rain.mp3';

const useAudio = (url: string): [boolean, (playing: boolean) => void] => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audio.current) {
      if (playing) {
        audio.current.play()
      } else {
        audio.current.pause()
      }
    }

    return () => {
      if (audio.current) {
        audio.current.pause()
      }
    }
  }, [playing]);

  return [playing, setPlaying];
};

const Music: React.FC = () => {
  const [playing, setPlaying] = useAudio(Rain);

  return (
    <Styled.RainMusicButton
      playing={playing}
      onClick={() => {
        setPlaying(!playing)
      }}
    >
      Rain
    </Styled.RainMusicButton>
  )
};

export default Music;
