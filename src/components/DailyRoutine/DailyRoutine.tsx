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
      {(startTime >= '05:00' && startTime <= '19:00') ?
        <Styled.RoutineInfo isChecked={completed}>
          {startTime} 🌞 {title} {time}min
        </Styled.RoutineInfo>
        :
        <Styled.RoutineInfo isChecked={completed}>
          {startTime} 🌚 {title} {time}min
        </Styled.RoutineInfo>
      }
      <Styled.EditButton
        startIcon={<EditIcon />}
        onClick={handleClickOpenEditModal}
      />
      <Styled.DeleteButton
        startIcon={<DeleteIcon />}
        onClick={handleDeleteRoutine}
      />
    </Styled.RoutineItem>
  );
};

export default DailyRoutine;
