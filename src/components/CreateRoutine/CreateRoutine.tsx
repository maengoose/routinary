import Modal from '@mui/material/Modal';

import { useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

type Routine = {
  id: number;
  title: string;
  startTime: string;
  time: string;
}

const CreateRoutine: React.VFC<Props> = (props) => {
  const { open, onClose } = props;
  const [routine, setRoutine] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('0');
  const [routines, setRoutines] = useState<Routine[]>([]);
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

  const handleDeleteRoutine = (id: number) => {
    const newRoutines = routines.filter(routine => routine.id !== id);
    setRoutines(newRoutines);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!routine || !time) {
      return;
    }

    setId(id + 1);

    setRoutines((prevState) => [
      ...prevState,
      {
        id: id,
        title: routine,
        startTime: time,
        time: duration
      }
    ]);
    setRoutine('');
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div>
        <form onSubmit={handleSubmit}>
        <input type="time" value={time} onChange={handleChangeTime} />
        <input type="text" placeholder="write" value={routine} onChange={handleChangeRoutine} />
        <div>
          <input type="range" id="duration" name="duration" min="0" max="60" value={duration} step="15" onChange={handleChangeDuration}/>
          <label htmlFor="duration">{duration}min</label>
        </div>
        <input type="submit" value="add" />
      </form>

      <ul>
        {routines.map(({ id, title, startTime, time }) => (
          <li key={id}>
            {startTime} Routine: {title}  {time}min
            <button type='button' onClick={() => handleDeleteRoutine(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </Modal>
  )
}

export default CreateRoutine;
