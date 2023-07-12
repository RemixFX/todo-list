'use client'

import { useMemo, useState } from 'react';
import Checkbox from './components/Checkbox/checkbox';
import Form from './components/Form/form';
import Header from './components/Header/header';
import TodoList from './components/TodoList/todo-list';
import styles from './page.module.css'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addTask, changeTheme } from '@/app/store/reducers/actionCreators';


export default function Home() {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(state => state.theme)
  const { todoList } = useAppSelector(state => state.todo)
  const [showCopleted, setIsshowCopleted] = useState<boolean>(false)

  const handleChangeTheme = (value: boolean) => {
    if (!value) {
      dispatch(changeTheme('dark'))
    } else {
      dispatch(changeTheme('light'))
    }
  }
  
  const filteredTask = useMemo(() => {
    return todoList.filter(task => task.completed === showCopleted).reverse()
  }, [showCopleted, todoList])

  const changeFilterTodo = (value: boolean) => {
    setIsshowCopleted(value)
  }

  const submitForm = (value: string) => {
    dispatch(addTask({ task: value, completed: false }))
  }
  
  return (
    <main className={styles.main} data-theme={theme}>
      <Header
        checkboxCallback={handleChangeTheme}
        values={['Светлая тема', 'Темная тема']}
      />
      <div className={styles.layout}>
        <TodoList todoList={filteredTask} />
        <div className={styles.right_block}>
          <Checkbox
            checkboxCallback={changeFilterTodo}
            values={['Показать завершенные', 'Показать незавершенные']}
          />
          <Form submit={submitForm}
            titleForm='Добавить задачу'
            titleButton='Добавить'
          />
        </div>
      </div>
    </main>
  )
}
