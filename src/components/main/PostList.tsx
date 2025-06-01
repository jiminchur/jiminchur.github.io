import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostItem from './PostItem'

type PostListProps = {
  posts: Queries.IndexPageQuery['allContentfulPost']['nodes']
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 40px;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 10px;
  }
`

export default function PostList({ posts }: PostListProps) {
  return (
    <Wrapper>
      {posts.map(({ title, date, category, thumbnail, description, slug }) => (
        <PostItem
          title={title as string}
          date={date as string}
          category={category as string[]}
          thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData}
          description={description?.description as string}
          link={`/${slug}`}
          key={slug as string}
        />
      ))}
    </Wrapper>
  )
}
