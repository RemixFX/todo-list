'use client'
 
import { Provider } from 'react-redux'
import { store } from '../store/store'

// Оболочка для Provider т.к. у библиотеки нет 'use client'
export function ThemeProvider({ children }: { children: React.ReactNode}) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}