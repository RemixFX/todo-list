import Checkbox, { CheckboxProps } from '../Checkbox/checkbox'
import styles from './header.module.css'
import Image from 'next/image'
import logo from '@/public/logo.png'
import { useAppSelector } from '@/app/store/hooks'

export default function Header({ checkboxCallback, values }: CheckboxProps) {

  const { theme } = useAppSelector(state => state.theme)

  return (
    <div className={styles.header} data-theme={theme}>
      <div className={styles.logo_box}>
        <Image width={100} height={30} alt='Фабрика приложений' src={logo} className={styles.logo} />
      </div>
        <Checkbox
          checkboxCallback={checkboxCallback}
          values={values}
        />
    </div>
  )
}