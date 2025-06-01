import { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import Comment from './Comment'
import TableOfContents from './TableOfContents'
import useRenderRichText from '../../hooks/useRenderRichText'

type PostBodyProps = {
  content: Queries.ContentfulPostContent
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 280px;
  grid-gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 220px;
    grid-gap: 30px;
    padding-top: 60px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 40px;
    grid-gap: 0;
  }
`

const Content = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 80px;

  /* 읽기 최적화된 타이포그래피 */
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  color: #2c3e50;
  letter-spacing: -0.003em;
  word-break: keep-all;
  word-wrap: break-word;

  /* 최적 읽기 너비 */
  max-width: 100%;

  @media (max-width: 1024px) {
    font-size: 17px;
    line-height: 1.75;
    gap: 60px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
    gap: 50px;
  }

  /* 본문 스타일링 */
  #content {
    /* 문단 스타일링 */
    p {
      margin: 1.5em 0;
      text-align: justify;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    /* 강조 텍스트 */
    strong {
      font-weight: 600;
      color: #1a252f;
    }

    em {
      font-style: italic;
      color: #34495e;
    }

    /* 링크 스타일링 */
    a {
      color: #3498db;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.2s ease;

      &:hover {
        color: #2980b9;
        border-bottom-color: #2980b9;
      }
    }

    /* 리스트 스타일링 */
    ul,
    ol {
      margin: 1.5em 0;
      padding-left: 2em;

      li {
        margin: 0.5em 0;
        line-height: 1.6;
      }
    }

    ul li {
      list-style-type: disc;
    }

    ol li {
      list-style-type: decimal;
    }

    /* 인용구 스타일링 */
    blockquote {
      margin: 2em 0;
      padding: 1.5em 2em;
      background: #f8f9fa;
      border-left: 4px solid #3498db;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: #34495e;

      p {
        margin: 0;
      }
    }

    /* 이미지 스타일링 */
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      margin: 2em auto;
      display: block;
    }

    /* 수평선 스타일링 */
    hr {
      margin: 3em 0;
      border: none;
      height: 1px;
      background: linear-gradient(90deg, transparent, #bdc3c7, transparent);
    }

    /* 테이블 스타일링 */
    table {
      width: 100%;
      margin: 2em 0;
      border-collapse: collapse;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;

      th,
      td {
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid #ecf0f1;
      }

      th {
        background: #f8f9fa;
        font-weight: 600;
        color: #2c3e50;
      }

      tr:hover {
        background: #f8f9fa;
      }
    }
  }
`

export default function PostBody({ content }: PostBodyProps) {
  const richText = useRenderRichText(content)

  useEffect(() => {
    Prism.highlightAll()
  }, [richText])

  return (
    <Wrapper>
      <Content>
        <div id="content">{richText}</div>
        <Comment />
      </Content>
      <TableOfContents content={content} />
    </Wrapper>
  )
}
