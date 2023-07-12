'use client'

import Form from './components/Form/form';
import Header from './components/Header/header';
import TodoList from './components/TodoList/todo-list';
import styles from './page.module.css'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { changeTheme } from '@/app/store/reducers/actionCreators';


export default function Home() {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(state => state.theme)
  const { todoList } = useAppSelector(state => state.todo)

  const handleChangeTheme = (value: boolean) => {
    if (!value) {
      dispatch(changeTheme('dark'))
    } else {
      dispatch(changeTheme('light'))
    }
  }

  const submitForm = (value: string) => {
    console.log(value)
  }

  return (
    <main className={styles.main} data-theme={theme}>
      <Header
        checkboxCallback={handleChangeTheme}
        values={['Светлая тема', 'Темная тема']}
      />
      <div className={styles.layout}>
        <TodoList todoList={todoList}/>
        <Form submit={submitForm}
        titleForm='Добавить задачу'
        titleButton='Добавить'
      />
      </div>
      
      
    </main>
  )
}
