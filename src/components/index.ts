/**
 * 컴포넌트들 통합 export
 */

// 공통 컴포넌트
export { default as Layout } from './common/Layout'
export { default as SEO } from './common/Seo'
export * from './common/StyledComponents'

// 메인 컴포넌트
export { default as PostList } from './main/PostList'

// 포스트 컴포넌트 (동적 import 또는 필요시)
// export { default as PostDetail } from './post/PostDetail'
