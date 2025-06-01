import { createElement, HTMLAttributes } from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'

type HeadingProps = {
  type: BLOCKS.HEADING_1 | BLOCKS.HEADING_2 | BLOCKS.HEADING_3
} & HTMLAttributes<HTMLHeadingElement>

const Components = {
  [BLOCKS.HEADING_1]: styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1a252f;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.02em;

    * + & {
      margin-top: 4rem;
    }

    hr + & {
      margin-top: 0;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1rem;

      * + & {
        margin-top: 3rem;
      }
    }
  `,
  [BLOCKS.HEADING_2]: styled.h2`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    color: #2c3e50;
    margin: 0 0 1.25rem 0;
    letter-spacing: -0.015em;

    * + & {
      margin-top: 3.5rem;
    }

    hr + & {
      margin-top: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 1rem;

      * + & {
        margin-top: 2.5rem;
      }
    }
  `,
  [BLOCKS.HEADING_3]: styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    color: #34495e;
    margin: 0 0 1rem 0;
    letter-spacing: -0.01em;

    * + & {
      margin-top: 3rem;
    }

    hr + & {
      margin-top: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.375rem;
      margin-bottom: 0.75rem;

      * + & {
        margin-top: 2rem;
      }
    }
  `,
}

export default function Heading({ type, children, ...props }: HeadingProps) {
  return createElement(Components[type], props, children)
}
