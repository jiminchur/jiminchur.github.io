import { Link } from 'gatsby'
import styled from 'styled-components'

interface NavigationPost {
  title: string
  slug: string
}

interface PostNavigationProps {
  previousPost?: NavigationPost
  nextPost?: NavigationPost
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 40px 0;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

const NavButton = styled(Link)<{ direction: 'prev' | 'next' }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: var(--nav-bg, #f8f9fa);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  min-height: 80px;
  justify-content: center;

  ${props =>
    props.direction === 'prev'
      ? `
    text-align: left;
    align-items: flex-start;
  `
      : `
    text-align: right;
    align-items: flex-end;
  `}

  &:hover {
    background: var(--nav-hover-bg, #e9ecef);
    border-color: var(--primary-color, #007acc);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
`

const NavLabel = styled.div`
  font-size: 12px;
  color: var(--meta-color, #666);
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const NavTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color, #333);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const EmptySpace = styled.div`
  flex: 1;
`

export default function PostNavigation({
  previousPost,
  nextPost,
}: PostNavigationProps) {
  return (
    <Container>
      {previousPost ? (
        <NavButton to={`/${previousPost.slug}`} direction="prev">
          <NavLabel>← 이전 포스트</NavLabel>
          <NavTitle>{previousPost.title}</NavTitle>
        </NavButton>
      ) : (
        <EmptySpace />
      )}

      {nextPost ? (
        <NavButton to={`/${nextPost.slug}`} direction="next">
          <NavLabel>다음 포스트 →</NavLabel>
          <NavTitle>{nextPost.title}</NavTitle>
        </NavButton>
      ) : (
        <EmptySpace />
      )}
    </Container>
  )
}
