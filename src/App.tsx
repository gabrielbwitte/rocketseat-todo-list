import style from './App.module.css';
import './global.css';
import { Header } from './component/Header';
import { NewTask } from './component/NewTask';
import { TaskList } from './component/TaskList';
import { useState } from 'react';


function App() {
  const [contentToList, setContentToList] = useState('')
  const newContentTask = (t: string) => {
    setContentToList(t)
  }

  return (
    <div className={style.app}>
      <Header />
      <NewTask content={newContentTask}/>
      <TaskList contentToList={contentToList}/>
    </div>
  )
}

export default App
