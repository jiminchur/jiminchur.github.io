import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type CodeProps = {
  isBlock?: boolean
  children: ReactNode
} & HTMLAttributes<HTMLElement>

const InlineCode = styled.code`
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 0.875em;
  background: #f1f3f4;
  border-radius: 6px;
  font-family:
    'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
  color: #e83e8c;
  border: 1px solid #e1e4e8;
  white-space: nowrap;
`

const BlockCode = styled.pre`
  margin: 2rem 0 !important;
  padding: 1.5rem !important;
  background: #f8f8f8 !important;
  border-radius: 12px !important;
  border: 1px solid #e1e4e8 !important;
  overflow-x: auto;
  line-height: 1.6 !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  & * {
    font-family:
      'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace !important;
    font-size: 0.875rem !important;
  }

  code {
    background: transparent !important;
    padding: 0 !important;
    border: none !important;
    border-radius: 0 !important;
    color: inherit !important;
  }

  @media (max-width: 768px) {
    margin: 1.5rem -1rem !important;
    border-radius: 0 !important;
    border-left: none !important;
    border-right: none !important;

    & * {
      font-size: 0.8rem !important;
    }
  }
`

export default function Code({
  isBlock = false,
  children,
  ...props
}: CodeProps) {
  if (!isBlock) return <InlineCode {...props}>{children}</InlineCode>
  else
    return (
      <BlockCode>
        <code {...props}>{children}</code>
      </BlockCode>
    )
}
