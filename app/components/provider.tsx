'use client'
 
import { Provider } from 'react-redux'
import { store } from '../store/store'
 
export function ThemeProvider({ children }: { children: React.ReactNode}) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}