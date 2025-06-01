import styled from 'styled-components'
import { useDarkMode } from '../../hooks/useDarkMode'

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--hover-bg);
    transform: scale(1.1);
  }
`

export default function DarkModeToggle() {
  const { theme, toggleTheme, mounted } = useDarkMode()

  if (!mounted) {
    return <ToggleButton>🌙</ToggleButton>
  }

  return (
    <ToggleButton
      onClick={toggleTheme}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </ToggleButton>
  )
}
