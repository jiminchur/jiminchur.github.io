import { HeadFC, HeadProps, PageProps, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostHead from '../components/post/PostHead'
import PostBody from '../components/post/PostBody'
import PostNavigation from '../components/post/PostNavigation'
import RelatedPosts from '../components/post/RelatedPosts'
import SEO from '../components/common/Seo'

interface PostPageQueryData {
  contentfulPost: {
    title: string | null
    category: string[] | null
    date: string | null
    slug: string | null
    thumbnail: {
      url: string | null
      gatsbyImageData: IGatsbyImageData | null
    } | null
    description: {
      description: string | null
    } | null
    content: {
      raw: string | null
      references: any[] | null
    } | null
  } | null
  allContentfulPost: {
    nodes: Array<{
      title: string | null
      slug: string | null
      date: string | null
      category: string[] | null
      thumbnail: {
        gatsbyImageData: IGatsbyImageData | null
      } | null
      description: {
        description: string | null
      } | null
    }>
  }
}

export default function Post({
  data: { contentfulPost, allContentfulPost },
}: PageProps<PostPageQueryData>) {
  const currentPost = contentfulPost!
  const allPosts = allContentfulPost.nodes
  
  // 현재 포스트의 인덱스 찾기
  const currentIndex = allPosts.findIndex((post: any) => post.slug === currentPost.slug)
  
  // 이전/다음 포스트 찾기
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined

  // 관련 포스트를 위한 데이터 변환
  const relatedPostsData = allPosts.map((post: any) => ({
    title: post.title as string,
    slug: post.slug as string,
    date: post.date as string,
    category: post.category as string[],
    thumbnail: post.thumbnail ? {
      gatsbyImageData: post.thumbnail.gatsbyImageData as IGatsbyImageData
    } : undefined,
    description: post.description ? {
      description: post.description.description as string
    } : undefined
  }))

  return (
    <>
      <PostHead
        title={currentPost.title as string}
        category={currentPost.category as string[]}
        date={currentPost.date as string}
        thumbnail={currentPost.thumbnail?.gatsbyImageData as IGatsbyImageData}
      />
      <PostBody
        content={currentPost.content as Queries.ContentfulPostContent}
      />
      
      <PostNavigation
        previousPost={previousPost ? {
          title: previousPost.title as string,
          slug: previousPost.slug as string
        } : undefined}
        nextPost={nextPost ? {
          title: nextPost.title as string,
          slug: nextPost.slug as string
        } : undefined}
      />
      
      <RelatedPosts
        currentSlug={currentPost.slug as string}
        currentCategories={currentPost.category as string[]}
        allPosts={relatedPostsData}
      />
    </>
  )
}

export const Head: HeadFC<PostPageQueryData> = ({
  data: { contentfulPost },
}: HeadProps<PostPageQueryData>) => {
  return (
    <SEO
      title={contentfulPost?.title as string}
      description={contentfulPost?.description?.description as string}
      pathname={`/${contentfulPost?.slug}`}
      image={contentfulPost?.thumbnail?.url as string}
    />
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      category
      date
      slug
      thumbnail {
        url
        gatsbyImageData(width: 1000)
      }
      description {
        description
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 774)
            __typename
          }
        }
      }
    }
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        title
        slug
        date
        category
        thumbnail {
          gatsbyImageData(width: 400)
        }
        description {
          description
        }
      }
    }
  }
`
