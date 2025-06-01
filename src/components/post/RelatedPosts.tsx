import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

interface RelatedPost {
  title: string
  slug: string
  date: string
  category: string[]
  thumbnail?: {
    gatsbyImageData: IGatsbyImageData
  }
  description?: {
    description: string
  }
}

interface RelatedPostsProps {
  currentSlug: string
  currentCategories: string[]
  allPosts: RelatedPost[]
}

const Container = styled.div`
  margin: 60px 0;
  padding: 30px;
  background: var(--related-posts-bg, #f8f9fa);
  border-radius: 12px;
  border: 1px solid var(--border-color, #e9ecef);
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-color, #333);
  text-align: center;
`

const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`

const PostCard = styled(Link)`
  display: flex;
  background: var(--card-bg, white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  align-items: center;
  min-height: 120px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const ThumbnailContainer = styled.div`
  position: relative;
  width: 180px;
  height: 120px;
  flex-shrink: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
`

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PostContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const PostTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  color: var(--text-color, #333);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--meta-color, #666);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`

const Categories = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

const CategoryTag = styled.span`
  background: var(--tag-bg, #e9ecef);
  color: var(--tag-color, #495057);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
`

const PostDate = styled.span`
  font-size: 12px;
  color: var(--meta-color, #666);
`

const PostDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: var(--description-color, #666);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const NoRelatedPosts = styled.div`
  text-align: center;
  color: var(--meta-color, #666);
  font-style: italic;
  padding: 20px;
`

export default function RelatedPosts({
  currentSlug,
  currentCategories,
  allPosts,
}: RelatedPostsProps) {
  // 현재 포스트 제외하고 카테고리가 겹치는 포스트들 찾기
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const commonCategories = post.category.filter(cat =>
        currentCategories.includes(cat),
      ).length
      return { ...post, score: commonCategories }
    })
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  if (relatedPosts.length === 0) {
    return (
      <Container>
        <Title>관련 포스트</Title>
        <NoRelatedPosts>관련된 포스트가 없습니다.</NoRelatedPosts>
      </Container>
    )
  }

  return (
    <Container>
      <Title>관련 포스트</Title>
      <PostsGrid>
        {relatedPosts.map(post => (
          <PostCard key={post.slug} to={`/${post.slug}`}>
            {post.thumbnail?.gatsbyImageData && (
              <ThumbnailContainer>
                <Thumbnail
                  image={post.thumbnail.gatsbyImageData}
                  alt={post.title}
                />
              </ThumbnailContainer>
            )}
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <Categories>
                  {post.category.slice(0, 2).map(cat => (
                    <CategoryTag key={cat}>#{cat}</CategoryTag>
                  ))}
                </Categories>
                <PostDate>{post.date}</PostDate>
              </PostMeta>
              {post.description?.description && (
                <PostDescription>
                  {post.description.description}
                </PostDescription>
              )}
            </PostContent>
          </PostCard>
        ))}
      </PostsGrid>
    </Container>
  )
}
