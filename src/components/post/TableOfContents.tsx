import styled from 'styled-components'
import { GatsbyLinkProps, Link } from 'gatsby'
import useTableOfContents from '../../hooks/useTableOfContents'

type TableOfContentsProps = {
  content: Queries.ContentfulPostContent
}

const Wrapper = styled.nav`
  position: sticky;
  top: 120px;
  width: 100%;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #dee2e6;
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    top: 100px;
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Title = styled.h3`
  padding-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.01em;
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Item = styled(({ className, children, to }: GatsbyLinkProps<unknown>) => (
  <Link to={to} className={className}>
    {children}
  </Link>
))<{ $depth: number; $focused: boolean }>`
  display: block;
  padding: 0.5rem 0 0.5rem ${({ $depth }) => $depth * 1}rem;
  font-size: 0.875rem;
  font-weight: ${({ $focused }) => ($focused ? 600 : 400)};
  color: ${({ $focused }) => ($focused ? '#3498db' : '#6c757d')};
  text-decoration: none;
  border-radius: 6px;
  border-left: 3px solid
    ${({ $focused }) => ($focused ? '#3498db' : 'transparent')};
  background: ${({ $focused }) => ($focused ? '#f8f9fa' : 'transparent')};
  transition: all 0.2s ease;
  line-height: 1.4;
  position: relative;

  &:hover {
    color: #3498db;
    background: #f8f9fa;
    border-left-color: #3498db;
    transform: translateX(2px);
  }

  /* 활성 항목 표시 */
  ${({ $focused }) =>
    $focused &&
    `
    &::before {
      content: '';
      position: absolute;
      left: -3px;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 100%;
      background: #3498db;
      border-radius: 0 2px 2px 0;
    }
  `}

  /* 깊이별 스타일 */
  ${({ $depth }) => {
    if ($depth === 1) {
      return `
        font-weight: 500;
        font-size: 0.9rem;
      `
    }
    if ($depth >= 3) {
      return `
        font-size: 0.8rem;
        opacity: 0.8;
      `
    }
    return ''
  }}
`

export default function TableOfContents({
  content: { raw },
}: TableOfContentsProps) {
  const { toc, activeId } = useTableOfContents(raw as string)

  if (!toc || toc.length === 0) {
    return null
  }

  return (
    <Wrapper role="navigation" aria-label="목차">
      <Title>목차</Title>
      <Items>
        {toc.map(({ id, title, depth }) => (
          <Item
            to={`#${id}`}
            key={id}
            $depth={depth}
            $focused={id === activeId}
            title={title}
          >
            {title}
          </Item>
        ))}
      </Items>
    </Wrapper>
  )
}
