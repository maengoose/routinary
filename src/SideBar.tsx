import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router';
import * as Styled from './style';

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
  }

  const handleClickLogin = () => {
    navigate('/Login');
  }

  return (
    <>
      <Styled.SideBarBox>
        <HomeIcon onClick={handleClickHome} />
        <LoginIcon onClick={handleClickLogin} />
      </Styled.SideBarBox>
    </>
  )
}

export default SideBar;