import * as Styled from './style';
import { useAudio } from './useAudio';

import Rain from './WhiteNoise/Rain.mp3';

const Music: React.FC = () => {
  const { playing, togglePlaying } = useAudio(Rain);

  return (
    <Styled.RainMusicButton
      playing={playing}
      onClick={togglePlaying}
    >
      Rain
    </Styled.RainMusicButton>
  )
};

export default Music;
