import { useState } from 'react';

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

    setRoutines((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        title: routine,
        startTime: time,
        time: duration
      }
    ]);
    setRoutine('');
  }

  return (
    <div>
      <div className='line anim-typewriter'>
        Make your routine
      </div>
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
          <li key={id}>{startTime} {title} / {time}</li>
        ))}
      </ul>
    </div>
  )
}

export default DailyRoutine;
