import { useState, useCallback } from 'react';

import CreateRoutine from '../../components/CreateRoutine';
import DailyRoutine from '../../components/DailyRoutine';

import * as Styled from './style';

export type Routine = {
  id: number;
  title: string;
  startTime: string;
  time: string;
  completed: boolean;
}

const DailyRoutines: React.FC = () => {
  const [routine, setRoutine] = useState<Routine>();
  const [open, setOpen] = useState(false);
  const storage = sessionStorage.getItem('routines') || '[]';
  const [routines, setRoutines] = useState<Routine[]>(JSON.parse(storage));

  const handleOpen = () => {
    setRoutine(undefined);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleDeleteRoutine = useCallback((id: number) => {
    const newRoutines = routines.filter(routine => routine.id !== id);
    setRoutines(newRoutines);
  }, [routines]);

  const handleClickOpenEditModal = useCallback((id: number) => {
    const routine = routines.find((it) => it.id === id);
    if (!routine) {
      return;
    }

    setRoutine(routine);
    setOpen(true);
  }, [routines]);

  const handleAddRoutine = (routine: Routine) => {
    const newRoutines = [...routines, routine];
    setRoutines(newRoutines);
    sessionStorage.setItem('routines', JSON.stringify(newRoutines));
  }

  const handleEditRoutine = (routine: Routine) => {
    setRoutines(routines.map((it) => it.id === routine.id ? routine : it));
  }

  const handleUpdateRoutineStatus = (id: number) => {
    setRoutines(routines.map((routine) => routine.id === id ? { ...routine, completed: !routine.completed } : routine));
  }

  return (
    <div>
      <Styled.TextAnime>
        Make your routine
      </Styled.TextAnime>

      <div style={{ textAlign: 'center' }}>
        <Styled.CreateDailyRoutine
          variant='outlined'
          onClick={handleOpen}
        >
          create routine
        </Styled.CreateDailyRoutine>
      </div>
      <CreateRoutine
        routine={routine}
        open={open}
        onClose={handleClose}
        onAddRoutine={handleAddRoutine}
        onEditRoutine={handleEditRoutine}
      />
      {routines.length === 0 ? (
        <Styled.EmptyText> Add your routine </Styled.EmptyText>
      ) : (
        <Styled.RoutineList>
          {routines.map((routine: Routine) => (
            <DailyRoutine
              key={routine.id}
              routine={routine}
              onDeleteRoutine={handleDeleteRoutine}
              onClickOpenEditModal={handleClickOpenEditModal}
              onUpdateRoutineStatus={handleUpdateRoutineStatus}
            />
          ))}
        </Styled.RoutineList>
      )}
    </div>
  )
}

export default DailyRoutines;
