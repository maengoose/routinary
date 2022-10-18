import Music from '../../components/Music';

import * as Styled from './style';

import rainImage from './images/rain.jpg';
import rainyGif from './images/rainy.gif';

import bonfireImage from './images/bonfire.jpg';
import bonfireGif from './images/bonfire.gif';

import forestImage from './images/forest.jpg';
import forestGif from './images/forest.gif';

import wavesImage from './images/wave.jpg';
import wavesGif from './images/wave.gif';

const MusicList: React.FC = () => {
  const musicList = [
    {
      musicUrl: '/Rain.mp3',
      name: 'Rain',
      image: rainImage,
      gif: rainyGif
    },
    {
      musicUrl: '/Bonfire.mp3',
      name: 'Bonfire',
      image: bonfireImage,
      gif: bonfireGif
    },
    {
      musicUrl: '/Waves.mp3',
      name: 'Wave',
      image: wavesImage,
      gif: wavesGif
    },
    {
      musicUrl: '/forest.mp3',
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
