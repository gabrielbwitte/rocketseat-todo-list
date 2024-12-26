import { Trash } from '@phosphor-icons/react';
import style from './Task.module.css';
import { useState } from 'react';

interface Task {
  id: string,
  task: string,
  onCheckted: any,
  deleteTask: any
}

interface RiskText {
  risk: {
    textDecoration: string
  },
  noRisk: {
    textDecoration: string
  }
}

export function Task({id, task, onCheckted, deleteTask }: Task) {
  const [isChecked, setIsChecked] = useState(false);

  const riskText: RiskText = {
    risk: {
      textDecoration: 'line-through'
    },
    noRisk: {
      textDecoration: 'none'
    }
  }

  const handleChecked = (d: any) => {
    onCheckted({
      id: d.target.id,
      isCompleted: !isChecked
    });
    setIsChecked(!isChecked);
  }

  function handleDelete() {
    deleteTask(id)
  }

  return (
    <div className={style.task} id={id}>
      <div>
        <input type="checkbox" id={id} checked={isChecked} onChange={handleChecked} className={style.checkbox} />
        <p style={isChecked ? riskText.risk : riskText.noRisk}>{task}</p>
      </div>
      <button>
        <Trash size={20} onClick={handleDelete}/>
      </button>
    </div>
  )
}