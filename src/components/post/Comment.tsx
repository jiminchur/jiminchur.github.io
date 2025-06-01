import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const UTTERANCES_CONFIG = {
  src: 'https://utteranc.es/client.js',
  repo: 'jiminchur/jiminchur.github.io', // 실제 저장소명으로 수정 필요
  'issue-term': 'pathname',
  label: 'Comment',
  theme: 'github-light',
  crossorigin: 'anonymous',
} as const

const CommentContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9fa;
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6c757d;
  font-style: italic;
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`

const RetryButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null)
  const [loadingState, setLoadingState] = useState<
    'loading' | 'loaded' | 'error'
  >('loading')

  const loadUtterances = () => {
    if (!ref.current) return

    setLoadingState('loading')

    // 기존 스크립트 제거
    if (ref.current.hasChildNodes()) {
      ref.current.innerHTML = ''
    }

    try {
      const utterances = document.createElement('script')

      // 보안 검증: HTTPS 및 도메인 확인
      if (!UTTERANCES_CONFIG.src.startsWith('https://utteranc.es/')) {
        throw new Error('Invalid utterances source')
      }

      utterances.src = UTTERANCES_CONFIG.src
      utterances.async = true
      utterances.crossOrigin = UTTERANCES_CONFIG.crossorigin
      utterances.setAttribute('repo', UTTERANCES_CONFIG.repo)
      utterances.setAttribute('issue-term', UTTERANCES_CONFIG['issue-term'])
      utterances.setAttribute('label', UTTERANCES_CONFIG.label)
      utterances.setAttribute('theme', UTTERANCES_CONFIG.theme)

      // 로딩 완료 감지
      utterances.onload = () => setLoadingState('loaded')
      utterances.onerror = () => setLoadingState('error')

      ref.current.appendChild(utterances)

      // 타임아웃 설정 (10초 후 에러 처리)
      setTimeout(() => {
        if (loadingState === 'loading') {
          setLoadingState('error')
        }
      }, 10000)
    } catch (error) {
      console.error('Failed to load comments:', error)
      setLoadingState('error')
    }
  }

  useEffect(() => {
    // 페이지가 완전히 로드된 후 댓글 로드
    const timer = setTimeout(loadUtterances, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleRetry = () => {
    loadUtterances()
  }

  return (
    <CommentContainer>
      <h3>댓글</h3>

      {loadingState === 'loading' && (
        <LoadingMessage>댓글을 불러오는 중...</LoadingMessage>
      )}

      {loadingState === 'error' && (
        <ErrorMessage>
          댓글을 불러오는데 실패했습니다.
          <br />
          <RetryButton onClick={handleRetry}>다시 시도</RetryButton>
        </ErrorMessage>
      )}

      <div ref={ref} />
    </CommentContainer>
  )
}
