import { useNavigate } from "react-router-dom";
import * as Styled from './style';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleRoutineClick = () => {
    navigate('/routine');
  }

  const handleMusicClick = () => {
    navigate('/music');
  }

  return (
    <Styled.BackgroundBox>
      <Styled.RoutineButton variant='contained' onClick={handleRoutineClick}>
        Daily Routine
      </Styled.RoutineButton>
      <Styled.MeditationButton variant='contained' onClick={handleMusicClick}>
        Meditation
      </Styled.MeditationButton>
    </Styled.BackgroundBox>
  );
}

export default Home;
