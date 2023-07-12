import { useState } from 'react';
import styles from './todo.module.css'
import SelectAction from '../SelectAction/select-action';
import { useAppDispatch } from '@/app/store/hooks';
import { completeTask, removeTask } from '@/app/store/reducers/actionCreators';
import { ITodoList } from '@/app/store/reducers/todoSlice';

export default function Todo ({ task, id, completed }: ITodoList) {

  const [isShow, setIsShow] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  
  //Запрос на обновление complete у task на завершенную
  const setIsCompleteTask = () => {
    dispatch(completeTask(id))
  }
  
  //Запрос на удаление текущей task
  const setIsremoveTask = () => {
    dispatch(removeTask(id))
  }

  return (
    <li className={`${styles.element} ${completed ? styles.element_type_completed : ''}`}
     onClick={() => setIsShow(!isShow)}
     >
    {!isShow ? task : 
    <SelectAction 
    completed={completed}
    actionForCompleteButton={setIsCompleteTask}
    actionForRemoveButton={setIsremoveTask}
    />}
  </li>
  )
}