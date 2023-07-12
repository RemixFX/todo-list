import { useState } from 'react';
import styles from './todo.module.css'
import SelectAction from '../SelectAction/select-action';

interface TodoProps {
  content: string;
}

export default function Todo ({content}: TodoProps) {

  const [isShow, setIsShow] = useState<boolean>(false)
  
  return (
    <li className={styles.element} onClick={() => setIsShow(!isShow)}>
    {!isShow ? content : <SelectAction/>}
  </li>
  )
}