import * as Styled from './style';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
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
  const [routine, setRoutine] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('0');
  const [id, setId] = useState(100);

  const handleChangeRoutine: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRoutine(event.target.value);
  }

  const handleChangeTime: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTime(event.target.value);
  }

  const handleChangeDuration: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDuration(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!routine || !time) {
      return;
    }

    setId(id + 1);

    const objRoutine = {
      id: id,
      title: routine,
      startTime: time,
      time: duration
    };
    onAddRoutine(objRoutine)
    setRoutine('');
  }

  return (
    <Styled.ModalStyle
      open={open}
    >
      <div>
        <Styled.CloseButton onClick={onClose}>
          <CloseIcon />
        </Styled.CloseButton>
        <form onSubmit={handleSubmit}>
        <input type="time" value={time} onChange={handleChangeTime} />
        <input type="text" placeholder="write" value={routine} onChange={handleChangeRoutine} />
        <div>
          <input type="range" id="duration" name="duration" min="0" max="60" value={duration} step="15" onChange={handleChangeDuration}/>
          <label htmlFor="duration">{duration}min</label>
        </div>
        <input type="submit" value="add" />
      </form>
      </div>
    </Styled.ModalStyle>
  )
}

export default CreateRoutine;
