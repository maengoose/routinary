import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Routine } from '../../pages/DailyRoutines/DailyRoutines';

import * as Styled from './style';

type Props = {
  routine: Routine;
  onDeleteRoutine: (id: number) => void;
  onClickOpenEditModal: (id: number) => void;
  onUpdateRoutineStatus: (id: number) => void;
}

const SUNRISE = '05:00';
const SUNSET = '19:00';

const DailyRoutine: React.FC<Props> = ({ routine, onDeleteRoutine, onClickOpenEditModal, onUpdateRoutineStatus }) => {
  const { id, startTime, title, time, completed } = routine;

  const handleClickOpenEditModal = () => {
    onClickOpenEditModal(id);
  }

  const handleDeleteRoutine = () => {
    onDeleteRoutine(id);
  }

  const handleChangeCheckbox: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onUpdateRoutineStatus(id);
  }

  return (
    <Styled.RoutineItem>
      <input type='checkbox' onChange={handleChangeCheckbox} defaultChecked={completed} />
      <Styled.RoutineInfo isChecked={completed}>
        {startTime} {(startTime >= SUNRISE && startTime <= SUNSET) ? '🌞' : '🌚'} {title} {time}min
      </Styled.RoutineInfo>
      <div>
        <Styled.EditButton
          startIcon={<EditIcon />}
          onClick={handleClickOpenEditModal}
        />
        <Styled.DeleteButton
          startIcon={<DeleteIcon />}
          onClick={handleDeleteRoutine}
        />
      </div>
    </Styled.RoutineItem>
  );
};

export default DailyRoutine;
