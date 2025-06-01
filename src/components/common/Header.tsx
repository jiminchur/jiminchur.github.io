import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'
import SearchBox from './SearchBox'
import DarkModeToggle from './DarkModeToggle'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
    gap: 15px;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const Title = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
`

const SearchContainer = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 400px;
  }
`

const Menu = styled.div`
  display: flex;
  gap: 15px;
  font-size: 25px;

  & > a {
    display: flex;
    color: var(--icon-color);
    transition: color 0.3s ease;
  }

  & > a:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const query = graphql`
  query HeaderSearchPosts {
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        title
        slug
        category
        description {
          description
        }
      }
    }
  }
`

interface HeaderSearchPostsQueryData {
  allContentfulPost: {
    nodes: Array<{
      title: string | null
      slug: string | null
      category: string[] | null
      description: {
        description: string | null
      } | null
    }>
  }
}

export default function Header() {
  const data = useStaticQuery<HeaderSearchPostsQueryData>(query)
  const posts = data.allContentfulPost.nodes.map(post => ({
    title: post.title || '',
    slug: post.slug || '',
    category: post.category || [],
    description: post.description?.description || undefined,
  }))

  return (
    <Wrapper>
      <LeftSection>
        <Title to="/">DataEngineer Minchur</Title>
        <SearchContainer>
          <SearchBox posts={posts} />
        </SearchContainer>
      </LeftSection>

      <RightSection>
        <DarkModeToggle />
        <Menu>
          <a
            href="https://github.com/jiminchur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/your_instagram_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/%EB%AF%BC%EC%B2%A0-%EC%A7%80-30a8912b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </Menu>
      </RightSection>
    </Wrapper>
  )
}
