import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';
import * as Styled from './style';

const SideBar: React.VFC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
      <Styled.SideBarBox onClick={handleClick}>
        <HomeIcon />
      </Styled.SideBarBox>
  )
}

export default SideBar;