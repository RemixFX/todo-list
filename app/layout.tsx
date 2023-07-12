import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo-List',
  description: 'тестовое задание "Фабрика Приложений"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="ru">
      <body className={inter.className}>
      <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
    
  )
}
