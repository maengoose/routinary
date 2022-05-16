import { useState } from 'react';

import CreateRoutine from '../../components/CreateRoutine';

import * as Styled from './style';

type Routine = {
  id: number;
  title: string;
  startTime: string;
  time: string;
}

const DailyRoutine: React.VFC = () => {
  const [open, setOpen] = useState(false);
  const [routines, setRoutines] = useState<Routine[]>([]);


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleDeleteRoutine = (id: number) => {
    const newRoutines = routines.filter(routine => routine.id !== id);
    setRoutines(newRoutines);
  }

  const handleAddRoutine = (routine: Routine) => {
    setRoutines([...routines, routine]);
  }

  return (
    <div>
      <Styled.TextAnime>
        Make your routine
      </Styled.TextAnime>
      
      <Styled.CreateDailyRoutine
        variant='outlined'
        onClick={handleOpen}
      >
        create routine
      </Styled.CreateDailyRoutine>
      <CreateRoutine
        open={open}
        onClose={handleClose}
        onAddRoutine={handleAddRoutine}
      />
      <ul>
        {routines.map(({ id, title, startTime, time }: Routine) => (
          <li key={id}>
            {startTime} Routine: {title}  {time}min
            <button type='button' onClick={() => handleDeleteRoutine(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DailyRoutine;
