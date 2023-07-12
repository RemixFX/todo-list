import { useAppSelector } from '@/app/store/hooks'
import styles from './todo-list.module.css'
import { ITodoList } from '@/app/store/reducers/todoSlice'
import Todo from '../Todo/todo'

export default function TodoList({todoList}: {todoList: ITodoList[]}) {

  const { theme } = useAppSelector(state => state.theme)

  return (
    <section className={styles.section} data-theme={theme}>
      <h2 className={styles.title}>Список задач:</h2>
      <ul className={styles.list}>
        {todoList.map((item) =>
          <Todo key={item.id} task={item.task} id={item.id} completed={item.completed}/>
        )}
        
      </ul>
    </section>

  )
}