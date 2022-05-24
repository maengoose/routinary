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

  // 1. 이해
  // 원하는 것: 루틴 수정하기

  // 1. 이해
  // 원하는 것: 수정할 모달을 여는 것
  const handleClickOpenEditModal = (id: number) => {
    const routine = routines.find((it) => it.id === id)
    if (!routine) {
      return;
    }

    setRoutine(routine);
    setOpen(true);
    // 모달을 연다.

    //TODO: routine의 id가 같으면 open modal
    // const editRoutine = routines.map(routine => routine.id === id ? );
    // setRoutines(editRoutine);
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
        routine={routine}
        open={open}
        onClose={handleClose}
        onAddRoutine={handleAddRoutine}
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
