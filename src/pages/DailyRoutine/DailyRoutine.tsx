import { useState } from 'react';

import CreateRoutine from '../../components/CreateRoutine';

import * as Styled from './style';

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
      <Styled.TextAnime>
        Make your routine
      </Styled.TextAnime>
      
      <Styled.CreateDailyRoutine variant='outlined' onClick={handleOpen}>create routine</Styled.CreateDailyRoutine>
      <CreateRoutine
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}

export default DailyRoutine;
