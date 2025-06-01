import { graphql, useStaticQuery } from 'gatsby'
import { ReactNode } from 'react'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: ReactNode
}

// 입력 검증 및 XSS 방지 유틸리티
const sanitizeString = (str: string | undefined): string => {
  if (!str) return ''
  return str
    .replace(/[<>]/g, '') // 기본적인 HTML 태그 제거
    .replace(/javascript:/gi, '') // javascript: 프로토콜 제거
    .trim()
    .slice(0, 300) // 최대 길이 제한
}

const sanitizeUrl = (url: string | undefined): string => {
  if (!url) return ''
  // URL 검증: http, https, 상대경로만 허용
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('/')
  ) {
    return url.replace(/[<>"']/g, '') // 위험한 문자 제거
  }
  return ''
}

const METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "thumbnail" }) {
      publicURL
    }
  }
`

export default function SEO({
  title,
  description,
  pathname,
  image,
  children,
}: SEOProps) {
  const {
    site: { siteMetadata },
    file: { publicURL: defaultImage },
  } = useStaticQuery(METADATA_QUERY)

  // 입력 검증 적용
  const metadata = {
    title: sanitizeString(title) || sanitizeString(siteMetadata.title),
    description:
      sanitizeString(description) || sanitizeString(siteMetadata.description),
    siteUrl: `${siteMetadata.siteUrl}${sanitizeUrl(pathname) || ''}`,
    image: sanitizeUrl(image) || defaultImage,
  }

  return (
    <>
      <title>{metadata.title}</title>

      <html lang="ko" />
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      {/* 추가 보안 메타태그 */}
      <meta name="robots" content="index,follow" />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />

      {/* JSON-LD 구조화 데이터 */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: metadata.title,
          description: metadata.description,
          url: metadata.siteUrl,
          image: metadata.image,
          author: {
            '@type': 'Person',
            name: 'MinChur',
          },
        })}
      </script>

      {children}
    </>
  )
}
