import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

import CreateRoutine from '../../components/CreateRoutine';

import * as Styled from './style';

type Routine = {
  id: number;
  title: string;
  startTime: string;
  time: string;
}

const DailyRoutine: React.FC = () => {
  const [routine, setRoutine] = useState<Routine>();
  const [open, setOpen] = useState(false);
  const [routines, setRoutines] = useState<Routine[]>([]);


  const handleOpen = () => {
    setRoutine(undefined);
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
    setRoutines([...routines, routine]);
  }

  const handleEditRoutine = (routine: Routine) => {
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
            <div key={id}>
              <input type='checkbox' />
              {startTime} Routine: {title}  {time}min
              <Styled.EditButton
                startIcon={<EditIcon />}
                onClick={() => handleClickOpenEditModal(id)}
              />
              <Styled.DeleteButton
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteRoutine(id)}
              />
            </div>
          ))}
        </Styled.RoutineList>
      }
    </div>
  )
}

export default DailyRoutine;
