import { graphql, useStaticQuery } from 'gatsby'
import type { SeoProps, SiteQuery } from '../../types'
import { sanitizeString, sanitizeUrl } from '../../utils/validation'
import { SITE_CONFIG } from '../../constants'

const METADATA_QUERY = graphql`
  query SeoMetadataQuery {
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

interface MetadataQueryResult extends SiteQuery {
  file?: {
    publicURL: string
  }
}

export default function SEO({
  title,
  description,
  pathname = '',
  image,
  children,
}: SeoProps) {
  const queryResult = useStaticQuery<MetadataQueryResult>(METADATA_QUERY)
  const { site, file } = queryResult

  // 메타데이터 생성 (입력 검증 적용)
  const metadata = {
    title: sanitizeString(title) || sanitizeString(site.siteMetadata.title),
    description:
      sanitizeString(description) ||
      sanitizeString(site.siteMetadata.description),
    siteUrl: `${site.siteMetadata.siteUrl}${sanitizeUrl(pathname)}`,
    image: sanitizeUrl(image) || file?.publicURL || '',
    siteName: sanitizeString(site.siteMetadata.title),
  }

  // 구조화 데이터 생성
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: metadata.siteName,
    description: metadata.description,
    url: metadata.siteUrl,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.AUTHOR,
    },
    ...(metadata.image && { image: metadata.image }),
  }

  return (
    <>
      <title>{metadata.title}</title>
      <html lang={SITE_CONFIG.LOCALE} />

      {/* 기본 메타태그 */}
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      {/* 보안 및 SEO 메타태그 */}
      <meta name="robots" content="index,follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="author" content={SITE_CONFIG.AUTHOR} />

      {/* Open Graph 메타태그 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={metadata.siteName} />
      <meta property="og:locale" content={SITE_CONFIG.LOCALE} />
      {metadata.image && <meta property="og:image" content={metadata.image} />}

      {/* Twitter Card 메타태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      {metadata.image && <meta name="twitter:image" content={metadata.image} />}

      {/* 정규 URL */}
      <link rel="canonical" href={metadata.siteUrl} />

      {/* JSON-LD 구조화 데이터 */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {children}
    </>
  )
}
