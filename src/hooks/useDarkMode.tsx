import { useEffect, useState, useCallback } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // 시스템 테마 변경 감지
  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light')
    }
  }, [])

  // 초기 테마 설정
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as
        | 'light'
        | 'dark'
        | null
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches

      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme)
      } else if (prefersDark) {
        setTheme('dark')
      }

      // 시스템 테마 변경 리스너 추가
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange)
      } else {
        // 구형 브라우저 지원
        mediaQuery.addListener(handleSystemThemeChange)
      }

      setMounted(true)

      // 클린업
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleSystemThemeChange)
        } else {
          mediaQuery.removeListener(handleSystemThemeChange)
        }
      }
    } catch (error) {
      console.warn('Dark mode initialization failed:', error)
      setTheme('light') // 기본값으로 fallback
      setMounted(true)
    }
  }, [handleSystemThemeChange])

  // 테마 적용
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)

        // 메타 테마 컬러 업데이트 (모바일 브라우저 UI)
        const themeColorMeta = document.querySelector(
          'meta[name="theme-color"]',
        )
        if (themeColorMeta) {
          themeColorMeta.setAttribute(
            'content',
            theme === 'dark' ? '#1a1a1a' : '#ffffff',
          )
        }
      } catch (error) {
        console.warn('Theme application failed:', error)
      }
    }
  }, [theme, mounted])

  // 테마 토글
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }, [])

  // 특정 테마로 설정
  const setSpecificTheme = useCallback((newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
  }, [])

  // 시스템 테마로 리셋
  const resetToSystemTheme = useCallback(() => {
    try {
      localStorage.removeItem('theme')
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      setTheme(prefersDark ? 'dark' : 'light')
    } catch (error) {
      console.warn('Reset to system theme failed:', error)
    }
  }, [])

  return {
    theme,
    isDarkMode: theme === 'dark',
    toggleTheme,
    setSpecificTheme,
    resetToSystemTheme,
    mounted,
  }
}
