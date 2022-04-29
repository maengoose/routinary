import { useState } from 'react';

import CreateRoutine from '../../components/CreateRoutine';

import './DailyRoutine.css';

type Routine = {
  id: number;
  title: string;
  startTime: string;
  time: string;
}

const DailyRoutine: React.VFC = () => {
  const [routine, setRoutine] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('0');
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [id, setId] = useState(100);
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <div className='line anim-typewriter'>
        Make your routine
      </div>
      
      <button onClick={handleOpen}>create routine</button>
      <CreateRoutine
        open={open}
        onClose={handleClose}
      />

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
  )
}

export default DailyRoutine;
