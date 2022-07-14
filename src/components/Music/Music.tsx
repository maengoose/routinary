import { useAudio } from '../../hooks/useAudio';

import * as Styled from './style';

type Props = {
  musicUrl: string;
  name: string;
  image: string;
  gif: string;
}

const Music: React.FC<Props> = ({ musicUrl, name, image, gif }) => {
  const { playing, togglePlaying } = useAudio(musicUrl);

  return (
    <Styled.MusicButton
      playing={playing}
      onClick={togglePlaying}
      image={image}
      gif={gif}
    >
      {name}
    </Styled.MusicButton>
  );
}

export default Music;