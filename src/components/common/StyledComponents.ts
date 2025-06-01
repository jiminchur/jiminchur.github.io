import styled, { css } from 'styled-components'
import { THEME } from '../../constants'

// 기본 버튼 스타일
export const BaseButton = styled.button<{
  variant?: 'primary' | 'secondary' | 'ghost'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all ${THEME.ANIMATION.DURATION.NORMAL}
    ${THEME.ANIMATION.EASING.EASE_OUT};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: var(--color-primary);
          color: var(--color-text-inverse);

          &:hover:not(:disabled) {
            background: var(--color-primary-dark);
            transform: translateY(-1px);
          }
        `
      case 'secondary':
        return css`
          background: var(--color-surface);
          color: var(--color-text);
          border: 1px solid var(--color-border);

          &:hover:not(:disabled) {
            background: var(--color-surface-hover);
            border-color: var(--color-primary);
          }
        `
      case 'ghost':
        return css`
          background: transparent;
          color: var(--color-text-secondary);

          &:hover:not(:disabled) {
            background: var(--color-surface-hover);
            color: var(--color-text);
          }
        `
    }
  }}
`

// 컨테이너 컴포넌트
export const Container = styled.div<{ maxWidth?: string; padding?: string }>`
  width: 100%;
  max-width: ${({ maxWidth = '1200px' }) => maxWidth};
  margin: 0 auto;
  padding: ${({ padding = '0 1rem' }) => padding};

  @media (max-width: ${THEME.BREAKPOINTS.MOBILE}) {
    padding: ${({ padding = '0 1rem' }) => padding.replace('1rem', '0.75rem')};
  }
`

// 카드 컴포넌트
export const Card = styled.div<{ hover?: boolean; padding?: string }>`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: ${({ padding = '1.5rem' }) => padding};
  transition: all ${THEME.ANIMATION.DURATION.NORMAL}
    ${THEME.ANIMATION.EASING.EASE_OUT};

  ${({ hover = false }) =>
    hover &&
    css`
      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
        border-color: var(--color-primary-light);
      }
    `}
`

// 플렉스 컴포넌트
export const Flex = styled.div<{
  direction?: 'row' | 'column'
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  gap?: string
  wrap?: boolean
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ align = 'stretch' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  gap: ${({ gap = '0' }) => gap};

  ${({ wrap = false }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}
`

// 그리드 컴포넌트
export const Grid = styled.div<{
  columns?: number
  gap?: string
  minColumnWidth?: string
}>`
  display: grid;
  gap: ${({ gap = '1rem' }) => gap};

  ${({ columns, minColumnWidth = '300px' }) =>
    columns
      ? css`
          grid-template-columns: repeat(${columns}, 1fr);

          @media (max-width: ${THEME.BREAKPOINTS.TABLET}) {
            grid-template-columns: repeat(
              auto-fit,
              minmax(${minColumnWidth}, 1fr)
            );
          }
        `
      : css`
          grid-template-columns: repeat(
            auto-fit,
            minmax(${minColumnWidth}, 1fr)
          );
        `}
`

// 텍스트 컴포넌트
export const Text = styled.span<{
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: string
}>`
  ${({ size = 'base' }) => {
    const sizes = {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    }
    return css`
      font-size: ${sizes[size]};
    `
  }}

  ${({ weight = 'normal' }) => {
    const weights = {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
    return css`
      font-weight: ${weights[weight]};
    `
  }}
  
  color: ${({ color = 'var(--color-text)' }) => color};
`

// 숨김 텍스트 (접근성용)
export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

// 로딩 스피너
export const LoadingSpinner = styled.div<{ size?: string }>`
  width: ${({ size = '24px' }) => size};
  height: ${({ size = '24px' }) => size};
  border: 2px solid var(--color-border);
  border-top: 2px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
