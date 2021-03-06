import { useState, useCallback, useMemo, useEffect } from 'react';

import CreateRoutine from '../../components/CreateRoutine';
import DailyRoutine from '../../components/DailyRoutine';

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
  const [routine, setRoutine] = useState<Routine>();
  const [open, setOpen] = useState(false);
  const storage = localStorage.getItem('routines') || '[]';
  const [routines, setRoutines] = useState<Routine[]>(JSON.parse(storage));
  const [nextId, setNextId] = useState(routines[routines.length - 1]?.id + 1 || 1);

  useEffect(() => {
    // 최초 랜더링시에 현재 루틴들 중에 체크된놈의 completedTime이 isOverTime 이면, routines initiating!
    const checkedRoutine = routines.find(routine => routine.completed);
    if (checkedRoutine && isOverTime(checkedRoutine)) {
      initRoutines();
    }
  }, []);

  const initRoutines = () => {
    const newRoutines = routines.map(routine => {
      return routine.completed ? { ...routine, completed: false } : routine
    });
    setRoutines(newRoutines);
    localStorage.setItem('routines', JSON.stringify(newRoutines));
  }

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
    localStorage.setItem('routines', JSON.stringify(newRoutines));
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
    localStorage.setItem('routines', JSON.stringify(newRoutines));
    setNextId(routine.id + 1);
  }

  const handleEditRoutine = (routine: Routine) => {
    const newRoutines = routines.map((it) => it.id === routine.id ? routine : it);
    setRoutines(newRoutines);
    localStorage.setItem('routines', JSON.stringify(newRoutines));
  }

  const handleUpdateRoutineStatus = (id: number) => {
    const newRoutines = routines.map((routine) => {
      return routine.id === id ? (
        { ...routine, completed: !routine.completed, completedTime: routine.completed ? routine.completedTime : new Date() }
      ) : routine
    });
    setRoutines(newRoutines);
    localStorage.setItem('routines', JSON.stringify(newRoutines));
  }

  const countCompletedRoutines = useMemo(() => {
    const countRoutines = routines.filter(routine => routine.completed === true);
    return countRoutines.length;
  }, [routines])

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
      {open && <CreateRoutine
        routine={routine}
        open={open}
        nextId={nextId}
        onClose={handleClose}
        onAddRoutine={handleAddRoutine}
        onEditRoutine={handleEditRoutine}
      />}
      {routines.length === 0 ? (
        <Styled.EmptyText> Add your routine </Styled.EmptyText>
      ) : (
        <Styled.RoutineList>
          {insertionSort(routines).map((routine: Routine) => (
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
