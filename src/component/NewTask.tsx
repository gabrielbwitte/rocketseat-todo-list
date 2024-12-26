import style from './NewTask.module.css';
import { FormEvent, useState, ChangeEvent, useEffect} from 'react';


export function NewTask({ content }: any) {
  const [tasks , setTasks] = useState('');
  const [text, setText] = useState('');

  function handleSetText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  const handleNewTask = (event: FormEvent) => {
    event?.preventDefault();
    setTasks(text);
    setText('');
  }
  useEffect(() => {
    content(tasks);
  },[tasks])

  return (
    <form className={style.newtask}>
      <input type="text" value={text} onChange={handleSetText}  placeholder="Adicione uma nova tarefa"/>
      <button onClick={handleNewTask}>Criar</button>
    </form>
  )
}