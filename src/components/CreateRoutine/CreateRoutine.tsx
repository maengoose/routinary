import { useEffect, useRef, useState } from 'react';
import { Routine } from '../../pages/DailyRoutines/DailyRoutines';

import CloseIcon from '@mui/icons-material/Close';

import * as Styled from './style';

type Props = {
  routine?: Routine;
  open: boolean;
  onClose: () => void;
  onAddRoutine: (routine: Routine) => void;
  onEditRoutine: (routine: Routine) => void;
};

const CreateRoutine: React.FC<Props> = (props) => {
  const { open, onClose, onAddRoutine, onEditRoutine } = props;
  // TODO: 상태값 하나로 합치기
  const [title, setTitle] = useState(props.routine?.title || '');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('0');
  const [id, setId] = useState(0);

  const isUpdating = props.routine !== undefined;

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeTime: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTime(event.target.value);
  }

  const handleChangeDuration: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDuration(event.target.value);
  }

  const nextId = useRef(0);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!title || !time) {
      return alert('title/time을 입력해주세요');
    }

    if (id !== 0 && props.routine) {
      onEditRoutine({
        id,
        title,
        startTime: time,
        time: duration,
        completed: props.routine.completed
      });
      onClose();
      return;
    }

    const objRoutine = {
      id: nextId.current,
      title,
      startTime: time,
      time: duration,
      completed: false
    };

    setTitle('');
    onAddRoutine(objRoutine);
    nextId.current += 1;
    onClose();
  }

  useEffect(() => {
    if (props.routine) {
      setTitle(props.routine.title);
      setId(props.routine.id);
      setTime(props.routine.startTime);
      setDuration(props.routine.time);
    }
  }, [props.routine]);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (!props.routine) {
      setTitle('');
      setId(0);
      setTime('');
      setDuration('0');
    }
  }, [open, props.routine])

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
            <Styled.TextInput type="text" placeholder="write" value={title} onChange={handleChangeTitle} />
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
