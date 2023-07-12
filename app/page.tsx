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
  const [showCompleted, setIsshowCopleted] = useState<boolean>(false)

  // Запрос на изменение цветовой темы, в зависимости от входящих параметров
  const handleChangeTheme = (value: boolean) => {
    if (!value) {
      dispatch(changeTheme('dark'))
    } else {
      dispatch(changeTheme('light'))
    }
  }
  
  // Создание нового массива, отфильтрованного по завершщенным или незавершенным
  // task, в зависимости от изменения состояний 
  const filteredTask = useMemo(() => {
    return todoList.filter(task => task.completed === showCompleted).reverse()
  }, [showCompleted, todoList])

  // Изменение состояния для фильтра задач, после изменения состояния чекбокса
  const changeFilterTodo = (value: boolean) => {
    setIsshowCopleted(value)
  }

  // Запрос на создание новой task
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
