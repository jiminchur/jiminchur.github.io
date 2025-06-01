import { useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }

    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme, mounted }
}
