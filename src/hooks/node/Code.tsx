import { HTMLAttributes, ReactNode, useState } from 'react'
import styled from 'styled-components'

type CodeProps = {
  isBlock?: boolean
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLElement>

const InlineCode = styled.code`
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Nanum Gothic Coding', monospace;
  background: var(--inline-code-bg, #f1f3f5);
  color: var(--inline-code-color, #c7254e);
  font-size: 0.9em;
`

const BlockCodeContainer = styled.div`
  position: relative;
  margin: 30px 0 !important;
  border-radius: 8px;
  background: var(--code-block-bg, #2d3748);
  overflow: hidden;
`

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--code-header-bg, #1a202c);
  border-bottom: 1px solid var(--code-border, #4a5568);
`

const LanguageLabel = styled.span`
  font-size: 12px;
  color: var(--code-language-color, #a0aec0);
  font-weight: 600;
  text-transform: uppercase;
`

const CopyButton = styled.button<{ copied: boolean }>`
  background: ${props =>
    props.copied
      ? 'var(--success-color, #38a169)'
      : 'var(--copy-button-bg, #4a5568)'};
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background: ${props =>
      props.copied
        ? 'var(--success-hover, #2f855a)'
        : 'var(--copy-button-hover, #718096)'};
  }
`

const BlockCode = styled.pre`
  margin: 0 !important;
  padding: 16px;
  overflow-x: auto;
  background: var(--code-block-bg, #2d3748);

  & * {
    font-family: 'Nanum Gothic Coding', monospace !important;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbar-track, #1a202c);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb, #4a5568);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-hover, #718096);
  }
`

export default function Code({
  isBlock = false,
  children,
  className,
  ...props
}: CodeProps) {
  const [copied, setCopied] = useState(false)

  if (!isBlock) {
    return <InlineCode {...props}>{children}</InlineCode>
  }

  // 언어 추출
  const language = className?.replace('language-', '') || 'text'

  // 코드 내용 추출
  const codeContent =
    typeof children === 'string'
      ? children
      : children?.toString().replace(/^\s+|\s+$/g, '') || ''

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <BlockCodeContainer>
      <CodeHeader>
        <LanguageLabel>{language}</LanguageLabel>
        <CopyButton
          copied={copied}
          onClick={handleCopy}
          title={copied ? '복사됨!' : '코드 복사'}
        >
          {copied ? '✓ 복사됨' : '📋 복사'}
        </CopyButton>
      </CodeHeader>
      <BlockCode>
        <code className={className} {...props}>
          {children}
        </code>
      </BlockCode>
    </BlockCodeContainer>
  )
}
