import { ReactNode } from 'react'
import styled from 'styled-components'

type BlockquoteProps = {
  children: ReactNode
}

const Component = styled.blockquote`
  margin: 2.5rem 0;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 5px solid #3498db;
  border-radius: 0 12px 12px 0;
  font-style: italic;
  font-size: 1.05em;
  line-height: 1.7;
  color: #495057;
  position: relative;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);

  &::before {
    content: '"';
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    font-size: 3rem;
    color: #3498db;
    opacity: 0.3;
    font-family: Georgia, serif;
    line-height: 1;
  }

  p {
    margin: 0;
    position: relative;
    z-index: 1;
  }

  p:first-child {
    padding-left: 1rem;
  }

  @media (max-width: 768px) {
    margin: 2rem -1rem;
    border-radius: 0;
    border-left-width: 4px;
    padding: 1.25rem 1.5rem;
    font-size: 1em;

    &::before {
      font-size: 2.5rem;
      left: 0.75rem;
    }

    p:first-child {
      padding-left: 0.75rem;
    }
  }
`

export default function Blockquote({ children }: BlockquoteProps) {
  return <Component>{children}</Component>
}
