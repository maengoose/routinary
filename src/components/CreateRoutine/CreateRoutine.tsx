import { useEffect, useState } from 'react';
import { Routine } from '../../pages/DailyRoutines/DailyRoutines';

import CloseIcon from '@mui/icons-material/Close';

import * as Styled from './style';

type Props = {
  routine?: Routine;
  open: boolean;
  nextId: number;
  onClose: () => void;
  onAddRoutine: (routine: Routine) => void;
  onEditRoutine: (routine: Routine) => void;
};

const CreateRoutine: React.FC<Props> = (props) => {
  const { open, onClose, onAddRoutine, onEditRoutine, nextId, routine } = props;
  // TODO: 상태값 하나로 합치기
  const [title, setTitle] = useState(routine?.title || '');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('5');
  const [id, setId] = useState(nextId || 0);

  const isUpdating = routine !== undefined;

  useEffect(() => {
    if (routine) {
      setTitle(routine.title);
      setId(routine.id);
      setTime(routine.startTime);
      setDuration(routine.time);
    }
  }, [routine]);

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeTime: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTime(event.target.value);
  }

  const handleChangeDuration: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDuration(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!title || !time) {
      return alert('title/time을 입력해주세요');
    }

    if (routine) {
      onEditRoutine({
        id,
        title,
        startTime: time,
        time: duration,
        completed: routine.completed,
        completedTime: routine.completedTime
      });
      onClose();
      return;
    }

    onAddRoutine({
      id,
      title,
      startTime: time,
      time: duration,
      completed: false,
      completedTime: null
    });

    onClose();
  }

  return (
    <Styled.ModalStyle
      BackdropProps={{ style: { background: 'none' } }}
      open={open}
    >
      <Styled.PopUp>
        <Styled.CloseButton onClick={onClose}>
          <CloseIcon />
        </Styled.CloseButton>
        <Styled.CreateRoutineForm onSubmit={handleSubmit}>
          <Styled.TimeInput type="time" value={time} onChange={handleChangeTime} />
          <div>
            <Styled.TextInput type="text" maxLength={10} placeholder="write" value={title} onChange={handleChangeTitle} />
          </div>
          <div>
            <Styled.RangeInput type="range" id="duration" name="duration" min="0" max="60" value={duration} step="15" onChange={handleChangeDuration} />
            <Styled.DurationTimeFont htmlFor="duration">{duration}min</Styled.DurationTimeFont>
          </div>
          <Styled.AddButton type="submit">
            {isUpdating ? 'edit' : 'add'}
          </Styled.AddButton>
        </Styled.CreateRoutineForm>
      </Styled.PopUp>
    </Styled.ModalStyle>
  )
}

export default CreateRoutine;
