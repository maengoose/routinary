import { useState } from 'react';

const DailyRoutine: React.VFC = () => {
  const [routine, setRoutine] = useState('');
  const [tasks, setTasks] = useState<{id: number, title: string}[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRoutine(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    if (!routine) {
      return;
    }

    setTasks((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        title: routine
      }
    ]);
    setRoutine('');

    event.preventDefault();
  }

  return (
    <div>
      <h1>
       Make your routine
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="write" value={routine} onChange={handleChange}/>
        <input type="submit" value="add" />
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default DailyRoutine;
