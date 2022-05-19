import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Styled from './style';

const Home: React.VFC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/routine');
  }
  
  return (
    <Styled.BackgroundBox>
      <Styled.RoutineButton variant='contained' onClick={handleClick}>
        Daily Routine
      </Styled.RoutineButton>
      <Button>
        Meditation
      </Button>
    </Styled.BackgroundBox>
  );
}

export default Home;
