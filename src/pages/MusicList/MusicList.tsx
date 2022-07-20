import Music from '../../components/Music';

import * as Styled from './style';

import Rain from './WhiteNoise/Rain.mp3';
import rainImage from './images/rain.jpg';
import rainyGif from './images/rainy.gif';

import Bonfire from './WhiteNoise/Bonfire.mp3';
import bonfireImage from './images/bonfire.jpg';
import bonfireGif from './images/bonfire.gif';

import forest from './WhiteNoise/forest.mp3';
import forestImage from './images/forest.jpg';
import forestGif from './images/forest.gif';

import Waves from './WhiteNoise/Waves.mp3';
import wavesImage from './images/wave.jpg';
import wavesGif from './images/wave.gif';

const MusicList: React.FC = () => {
  const musicList = [
    {
      musicUrl: Rain,
      name: 'Rain',
      image: rainImage,
      gif: rainyGif
    },
    {
      musicUrl: Bonfire,
      name: 'Bonfire',
      image: bonfireImage,
      gif: bonfireGif
    },
    {
      musicUrl: Waves,
      name: 'Wave',
      image: wavesImage,
      gif: wavesGif
    },
    {
      musicUrl: forest,
      name: 'Forest',
      image: forestImage,
      gif: forestGif
    }
  ];
  return (
    <Styled.MusicList>
      {musicList.map(music => (
        <Music key={music.name} musicUrl={music.musicUrl} name={music.name} image={music.image} gif={music.gif} />
      ))}
    </Styled.MusicList>
  )
};

export default MusicList;
