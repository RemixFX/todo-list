import { useAppSelector } from '@/app/store/hooks'
import styles from './form.module.css'
import { FormEvent, useState } from 'react'

interface FormProps {
  submit: (value: string) => void;
  titleForm: string;
  titleButton: string;
}

export default function Form({ submit, titleForm, titleButton }: FormProps) {

  const { theme } = useAppSelector(state => state.theme)
  const [value, setValue] = useState<string>('')

  // Поднятие стейта для отправки формы
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(value)
    setValue('')
  }

  return (
    <form className={styles.form} data-theme={theme} onSubmit={(e) => handleSubmit(e)}>
      <label className={styles.label}>{titleForm}</label>
      <input className={styles.input} required={true}
        value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className={styles.button} disabled={value.length === 0}>{titleButton}</button>
    </form>
  )
}