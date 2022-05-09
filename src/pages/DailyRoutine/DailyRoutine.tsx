import { useState } from 'react';

import CreateRoutine from '../../components/CreateRoutine';

import './DailyRoutine.css';

const DailyRoutine: React.VFC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <div className='line anim-typewriter'>
        Make your routine
      </div>
      
      <button onClick={handleOpen}>create routine</button>
      <CreateRoutine
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}

export default DailyRoutine;
