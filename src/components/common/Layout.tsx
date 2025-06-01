import { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'

type LayoutProps = {
  children: ReactNode
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100%;
    height: 100%;
  }

  /* 포커스 가시성 개선 (접근성) */
  *:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }

  /* 스킵 링크 (접근성) */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    z-index: 1000;
    background: #000;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
  }

  .skip-link:focus {
    top: 6px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Contents = styled.main`
  margin: 80px 0;

  @media (max-width: 1024px) {
    margin: 50px 0;
  }
`

export default function Layout({ children }: LayoutProps) {
  return (
    <ErrorBoundary>
      <Wrapper>
        <GlobalStyle />

        {/* 접근성 개선: 스킵 링크 */}
        <a href="#main-content" className="skip-link">
          메인 콘텐츠로 건너뛰기
        </a>

        <Header />
        <Contents id="main-content" role="main">
          {children}
        </Contents>
        <Footer />
      </Wrapper>
    </ErrorBoundary>
  )
}
