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
  const [routine, setRoutine] = useState<Routine>();
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

  const handleClickOpenEditModal = (id: number) => {
    const routine = routines.find((it) => it.id === id);
    if (!routine) {
      return;
    }

    setRoutine(routine);
    setOpen(true);
    // 모달을 연다.
  }

  const handleAddRoutine = (routine: Routine) => {
    console.log('routine: ', routine);
    setRoutines([...routines, routine]);
  }

  const handleEditRoutine = (routine: Routine) => {
    // const index = routines
    //   .findIndex(r => r.id === routine.id);
    
    // setRoutines([...routines.slice(0, index), routine, ...routines.slice(index + 1)]);
    setRoutines(routines.map((it) => it.id === routine.id ? routine : it));
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
        routine={routine}
        open={open}
        onClose={handleClose}
        onAddRoutine={handleAddRoutine}
        onEditRoutine={handleEditRoutine}
      />
      {routines.length === 0 ? (
        <Styled.EmptyText> Add your routine </Styled.EmptyText>
      ) :
        <Styled.RoutineList>
          {routines.map(({ id, title, startTime, time }: Routine) => (
            <li key={id}>
              {startTime} Routine: {title}  {time}min
              <button type='button' onClick={() => handleClickOpenEditModal(id)}>
                Edit
              </button>
              <button type='button' onClick={() => handleDeleteRoutine(id)}>
                Delete
              </button>
            </li>
          ))}
        </Styled.RoutineList>
      }
    </div>
  )
}

export default DailyRoutine;
