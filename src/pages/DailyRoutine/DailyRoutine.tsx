import { useState } from 'react';
import './DailyRoutine.css';

type Routine = {
  id: number;
  title: string;
  startTime: number;
  time: number;
}

const DailyRoutine: React.VFC = () => {
  const [routine, setRoutine] = useState('');
  const [routines, setRoutines] = useState<Routine[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRoutine(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!routine) {
      return;
    }

    setRoutines((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        title: routine,
        startTime: 20,
        time: 2
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
        <input type="text" placeholder="write" value={routine} onChange={handleChange}/>
        <input type="submit" value="add" />
      </form>

      <ul>
        {routines.map(({ id, title, startTime }) => (
          <li key={id}>{startTime} {title}</li>
        ))}
      </ul>
    </div>
  )
}

export default DailyRoutine;
