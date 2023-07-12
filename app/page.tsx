'use client'

import Checkbox from './components/Checkbox/checkbox'
import styles from './page.module.css'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { changeTheme } from '@/app/store/reducers/actionCreators';


export default function Home() {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(state => state.theme)

  const handleChangeTheme = (value: boolean) => {
    if (!value) {
      dispatch(changeTheme('dark'))
    } else {
      dispatch(changeTheme('light'))
    }
  }

  return (
    <main className={styles.main} data-theme={theme}>
      <Checkbox 
      checkboxCallback={handleChangeTheme} 
      values={['Светлая тема', 'Темная тема']}
      />
    </main>
  )
}
