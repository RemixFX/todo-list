import styles from './select-action.module.css'

interface SelectActionProps {
  actionForCompleteButton: () => void;
  actionForRemoveButton: () => void;
  completed: boolean;
}

export default function SelectAction({ actionForCompleteButton, actionForRemoveButton, completed }: SelectActionProps) {

  //Передача функции при клике на кнопку
  const handleClickCompleteButton = () => actionForCompleteButton()
  const handleClickRemoveButton = () => actionForRemoveButton()

  return (
    <div className={styles.container}>
      {!completed && <button className={`${styles.button} ${styles.button_type_complete}`}
        type="button" onClick={handleClickCompleteButton}>
        Выполнено
        &#10003;
      </button>}
      <button className={`${styles.button} ${styles.button_type_remove}`}
        type="button" onClick={handleClickRemoveButton}>
        Удалить
        &#10007;
      </button>
      <button className={`${styles.button} ${styles.button_type_cancel}`}>
        &#8634;
      </button>
    </div>
  )
}