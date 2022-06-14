import { useNavigate } from 'react-router';

import HomeIcon from '@mui/icons-material/Home';

import * as Styled from './style';

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
  }

  return (
    <Styled.SideBarBox>
      <HomeIcon onClick={handleClickHome} />
    </Styled.SideBarBox>
  )
}

export default SideBar;