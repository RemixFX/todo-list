import styles from './todo-list.module.css'

export default function TodoList () {
  return(
    <ul className={styles.list}>
      <li className={styles.element}></li>
    </ul>
  )
}