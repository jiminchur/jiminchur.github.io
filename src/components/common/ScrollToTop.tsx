import { useState, useEffect } from 'react'
import styled from 'styled-components'

const ScrollButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color, #007acc);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;
  transform: ${props =>
    props.visible ? 'translateY(0)' : 'translateY(100px)'};
  opacity: ${props => (props.visible ? 1 : 0)};

  &:hover {
    background: var(--primary-hover, #005a99);
    transform: ${props =>
      props.visible ? 'translateY(-5px)' : 'translateY(100px)'};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
`

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ScrollButton visible={isVisible} onClick={scrollToTop} title="맨 위로">
      ↑
    </ScrollButton>
  )
}
