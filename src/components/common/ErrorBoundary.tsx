import { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  margin: 2rem auto;
  max-width: 600px;
`

const ErrorTitle = styled.h2`
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const ErrorMessage = styled.p`
  color: #6c757d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const RetryButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }
`

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)

    // 프로덕션 환경에서는 오류 리포팅 서비스로 전송
    if (process.env.NODE_ENV === 'production') {
      // 예: Sentry, LogRocket 등의 오류 리포팅 서비스 연동
      // reportError(error, errorInfo)
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer role="alert">
          <ErrorTitle>앗! 문제가 발생했습니다</ErrorTitle>
          <ErrorMessage>
            페이지를 불러오는 중 오류가 발생했습니다.
            <br />
            잠시 후 다시 시도해 주세요.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry} type="button">
            다시 시도
          </RetryButton>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left' }}>
              <summary>개발자 정보 (개발 모드에서만 표시)</summary>
              <pre
                style={{
                  overflow: 'auto',
                  padding: '1rem',
                  background: '#f1f3f4',
                }}
              >
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
