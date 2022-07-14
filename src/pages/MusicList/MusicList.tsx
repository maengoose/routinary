import Music from '../../components/Music';

import Rain from './WhiteNoise/Rain.mp3';
import rainImage from './images/rain.jpg';
import rainyGif from './images/rainy.gif';

const MusicList: React.FC = () => {
  const musicList = [
    {
      musicUrl: Rain,
      name: 'Rain',
      image: rainImage,
      gif: rainyGif
    },
    {
      musicUrl: Rain,
      name: 'Bonfire',
      image: rainImage,
      gif: rainyGif
    },
    {
      musicUrl: Rain,
      name: 'Wave',
      image: rainImage,
      gif: rainyGif
    },
    {
      musicUrl: Rain,
      name: 'Forest',
      image: rainImage,
      gif: rainyGif
    }
  ];
  return (
    <div>
      {musicList.map(music => (
        <Music key={music.name} musicUrl={music.musicUrl} name={music.name} image={music.image} gif={music.gif} />
      ))}
    </div>
  )
};

export default MusicList;
