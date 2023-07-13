import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer () {
  return(
    <footer className={styles.footer}>
    <p> 2023 Todo List Тестовое задание для компании Фабрика приложений</p>
    <div className={styles.container}>
    <p>&copy; Роман Суханов</p>
    <Link className={styles.link} href='https://github.com/RemixFX/todo-list#readme'>GitHub</Link>
    </div>
  </footer>
  )
}