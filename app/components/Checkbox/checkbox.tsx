'use client'

import { useState } from 'react'
import styles from './checkbox.module.css'
import { useAppSelector } from '@/app/store/hooks';

export interface CheckboxProps {
  checkboxCallback: (value: boolean) => void
  values: string[]
}

export default function Checkbox({ checkboxCallback, values }: CheckboxProps) {

  const [checked, setIsChecked] = useState(true)
  const { theme } = useAppSelector(state => state.theme)

  const handleChange = () => {
    setIsChecked(!checked)
    checkboxCallback(checked)
  }

  return (
    <div className={styles.container} data-theme={theme}>
      <label className={styles.layout}>
        <input type="checkbox" className={styles.checkbox}
          checked={checked} onChange={handleChange}/>
        <span className={styles.switch}></span>
      </label>
      <div className={styles.descriptions}>
        <span className={styles.value}>{values[0]}</span>
        <span className={styles.value}>{values[1]}</span>
      </div>
    </div>

  )
}