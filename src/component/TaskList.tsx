import style from './TaskList.module.css';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';
import clipboard from '../assets/Clipboard.svg';
import { useEffect, useState } from 'react';

interface ContentToList {
  contentToList: string
}

export function TaskList({contentToList}:ContentToList) {
  const ids = uuidv4();
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [taskList, setTaskList] = useState([{
    id: ids,
    text: '',
    isCompleted: false
  }])

  useEffect(()=> {
    const task = {
      id: ids,
      text: contentToList,
      isCompleted: false
    }
    if(task.text !== ''){
      setTaskList([...taskList, task])
    } 
  }, [contentToList]);
  
  const onCheckted = (d: any)=> {
    for(let i=0; i < taskList.length; i++){
      if(taskList[i].id === d.id){
        taskList[i].isCompleted = d.isCompleted;
      }
    }
    let numberCompleted = 0
    for(let i=0; i < taskList.length; i++){
      if(taskList[i].isCompleted){
        numberCompleted++
      }
    }
    setTasksCompleted(numberCompleted);
  }

  const deleteTask = (d: any) => {
    const newTasks = taskList.filter(obj => obj.id !== d);
    setTaskList(newTasks);
  }

  return (
    <div className={style.tasklist}>
      <header>
        <p className={style.labelCreate}>Tarefas criadas <span>{taskList.length - 1}</span></p>
        <p className={style.labelCompleted}>Concluídas<span>{tasksCompleted} de {taskList.length - 1}</span></p>
      </header>
      {
        taskList.map((c) => {
          if(taskList.length > 1){
            if(c.text !== ''){
              return(
                <Task key={c.id} id={c.id} task={c.text} deleteTask={deleteTask} onCheckted={onCheckted}/>
              )
            }
          } else {
            return(
              <div  key={ids} className={style.noTask}>
               <img src={clipboard} alt="clipboard" />
               <h4>Voçe ainda não tem tarefas cadastradas</h4>
               <p>Crie tarefas e organize seus itens a fazer</p>
             </div>
            )
          }
        }
        )
      }
    </div>
  )
}