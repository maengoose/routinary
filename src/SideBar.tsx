import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';

const SideBar: React.VFC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <IconButton onClick={handleClick}>
      <HomeIcon />
    </IconButton>
  )
}

export default SideBar;