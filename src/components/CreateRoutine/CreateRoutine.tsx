import { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import * as Styled from './style';

type Props = {
  routine?: Routine;
  open: boolean;
  onClose: () => void;
  onAddRoutine: (routine: Routine) => void;
};

type Routine = {
  id: number;
  title: string;
  startTime: string;
  time: string;
}

const CreateRoutine: React.VFC<Props> = (props) => {
  const { open, onClose, onAddRoutine } = props;
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('0');
  const [id, setId] = useState(100);

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
      return;
    }

    setId(id + 1);

    const objRoutine = {
      id: id,
      title,
      startTime: time,
      time: duration
    };
    onAddRoutine(objRoutine)
    setTitle('');
  }

  useEffect(() => {
    if (props.routine) {
      setTitle(props.routine.title);
      setId(props.routine.id);
      setTime(props.routine.startTime);
      setDuration(props.routine.time);
    }
  }, [props.routine]);

  return (
    <Styled.ModalStyle
      BackdropProps={{style: {background: 'none'}}}
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
          <Styled.RangeInput type="range" id="duration" name="duration" min="0" max="60" value={duration} step="15" onChange={handleChangeDuration}/>
          <label htmlFor="duration">{duration}min</label>
        </div>
        <Styled.AddButton type="submit" value="add" />
      </Styled.CreateRoutineForm>
      </Styled.PopUp>
    </Styled.ModalStyle>
  )
}

export default CreateRoutine;
