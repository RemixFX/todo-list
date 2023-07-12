import styles from './select-action.module.css'

export default function SelectAction() {


  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.button_type_complete}`}
        type="button" >
          Выполнено
          &#10003;
        </button>
      <button className={`${styles.button} ${styles.button_type_remove}`}
        type="button" >
          Удалить
          &#10007;
          </button>
      <button className={`${styles.button} ${styles.button_type_cancel}`}>
      &#8634;
      </button>
    </div>
  )
}