// 공통 타입 정의
export interface SiteMetadata {
  title: string
  description: string
  siteUrl: string
}

export interface ContentfulAsset {
  gatsbyImageData?: {
    layout: string
    backgroundColor: string
    images: {
      fallback: {
        src: string
        srcSet: string
        sizes: string
      }
      sources: Array<{
        srcSet: string
        type: string
        sizes: string
      }>
    }
    width: number
    height: number
  }
  file?: {
    url: string
  }
  title?: string
  description?: string
}

export interface ContentfulPost {
  slug: string
  title: string
  description: string
  category: string
  createdAt: string
  updatedAt: string
  thumbnail?: ContentfulAsset
  content?: {
    raw: string
  }
}

export interface PostNode {
  node: ContentfulPost
}

export interface SearchResult {
  id: string
  title: string
  slug: string
  category: string
  description: string
}

export interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

export interface SeoProps {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export interface ThemeMode {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

// 유틸리티 타입들
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// 환경 변수 타입
export interface EnvironmentVariables {
  CONTENTFUL_SPACE_ID: string
  CONTENTFUL_ACCESS_TOKEN: string
  GOOGLE_ANALYTICS_ID?: string
}

// GraphQL 쿼리 결과 타입
export interface AllContentfulPostQuery {
  allContentfulPost: {
    nodes: ContentfulPost[]
    totalCount: number
  }
}

export interface SiteQuery {
  site: {
    siteMetadata: SiteMetadata
  }
}
