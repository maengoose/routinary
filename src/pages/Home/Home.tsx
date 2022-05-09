import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import './Home.css';

const Home: React.VFC = () => {
  return (
    <div className='background'>
      <Link to='/routine' className='link'>
        <Button variant='contained'>Daily Routine</Button>
      </Link>
    </div>
  );
}

export default Home;
