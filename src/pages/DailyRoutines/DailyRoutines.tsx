import { useState, useCallback, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CreateRoutine from '../../components/CreateRoutine/CreateRoutine';
import DailyRoutine from '../../components/DailyRoutine';
import { useAppSelector } from '../../hooks';
import { addRoutine, setRoutines, setRoutine, deleteRoutine, clickOpenEditModal, editRoutine } from '../../slice/routinesSlice';

import * as Styled from './style';

export type Routine = {
  id: number;
  title: string;
  startTime: string;
  time: string;
  completed: boolean;
  completedTime: Date | null;
}

const insertionSort = (arr: Routine[]) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    for (; j >= 0 && currentValue.startTime < arr[j].startTime; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
};

const DailyRoutines: React.FC = () => {
  // const [routine, setRoutine] = useState<Routine>();
  const [open, setOpen] = useState(false);
  const storage = localStorage.getItem('routines') || '[]';

  const dispatch = useDispatch();
  const { routines, routine } = useAppSelector((state) => state.routines);

  useEffect(() => {
    dispatch(setRoutines(localStorage.getItem('routines')));
  }, []);

  useEffect(() => {
    const checkedRoutine = routines.find(routine => routine.completed);
    if (checkedRoutine && isOverTime(checkedRoutine)) {
      initRoutines();
    }
  }, []);

  const initRoutines = () => {
    // const newRoutines = routines.map(routine => {
    //   return routine.completed ? { ...routine, completed: false } : routine
    // });
    // setRoutines(newRoutines);
    // localStorage.setItem('routines', JSON.stringify(newRoutines));
  }

  const handleOpen = () => {
    // initializeRouine()
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleDeleteRoutine = useCallback((id: number) => {
    dispatch(deleteRoutine(id));
  }, [dispatch]);

  const handleClickOpenEditModal = useCallback((id: number) => {
    dispatch(clickOpenEditModal(id));
    setOpen(true);
  }, [dispatch]);

  const handleAddRoutine = (routine: Routine) => {
    dispatch(addRoutine(routine));
  }

  const handleEditRoutine = (routine: Routine) => {
    dispatch(editRoutine(routine));
  }

  const handleUpdateRoutineStatus = (id: number) => {
    // const newRoutines = routines.map((routine) => {
    //   return routine.id === id ? (
    //     { ...routine, completed: !routine.completed, completedTime: routine.completed ? routine.completedTime : new Date() }
    //   ) : routine
    // });
    // setRoutines(newRoutines);
    // localStorage.setItem('routines', JSON.stringify(newRoutines));
  }

  const countCompletedRoutines = useMemo(() =>
    routines.filter(routine => routine.completed).length,
    [routines]
  );

  const isOverTime = (routine: Routine) => {
    if (routine.completed && routine.completedTime) {
      const completedTimeKST = new Date(routine.completedTime);
      const completedDateKST = completedTimeKST.getDate();
      const nowKST = new Date();
      const nowDate = nowKST.getDate();
      const difference = completedDateKST - nowDate;
      return difference >= 1;
    }
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
      {open && (
        <CreateRoutine
          routine={routine}
          open={open}
          onClose={handleClose}
          onAddRoutine={handleAddRoutine}
          onEditRoutine={handleEditRoutine}
        />
      )}
      {routines.length === 0 ? (
        <Styled.EmptyText> Add your routine </Styled.EmptyText>
      ) : (
        <Styled.RoutineList>
          {insertionSort([...routines]).map((routine: Routine) => (
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
      <Styled.RoutineAward>
        {`✔︎  You completed ${countCompletedRoutines} routines`}
      </Styled.RoutineAward>
    </div>
  )
}

export default DailyRoutines;
