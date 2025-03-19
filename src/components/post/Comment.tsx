import { useEffect, useRef } from 'react'

const ATTRIBUTES = {
  src: 'https://utteranc.es/client.js', // 🔥 < > 꺾쇠 괄호 제거!
  repo: 'jiminchur/jiminchur.github.io', // 🔥 사용자명과 저장소명 확인 필수
  'issue-term': 'pathname',
  label: 'Comment',
  theme: 'github-light',
  crossorigin: 'anonymous',
  async: 'true',
}

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    const utterances = document.createElement('script')
    utterances.src = ATTRIBUTES.src // 🔥 직접 src 속성 추가 (꺾쇠 괄호 없이!)
    utterances.async = true
    utterances.crossOrigin = ATTRIBUTES.crossorigin
    utterances.setAttribute('repo', ATTRIBUTES.repo)
    utterances.setAttribute('issue-term', ATTRIBUTES['issue-term'])
    utterances.setAttribute('label', ATTRIBUTES.label)
    utterances.setAttribute('theme', ATTRIBUTES.theme)

    ref.current.appendChild(utterances)

    // 🔥 언마운트 시 댓글 컴포넌트 제거 → 중복 생성 방지
    return () => {
      if (ref.current?.hasChildNodes())
        ref.current.removeChild(ref.current.childNodes[0])
    }
  }, [])

  return <div ref={ref} />
}
