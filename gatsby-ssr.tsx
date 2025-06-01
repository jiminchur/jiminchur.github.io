import { GatsbySSR } from 'gatsby'
import Layout from './src/components/common/Layout'

const HeadComponents = [
  <link
    rel="stylesheet"
    as="style"
    crossOrigin="anonymous"
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
    key="pretendard-font"
  />,
]

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
  setHeadComponents,
}) => {
  setHtmlAttributes({ lang: 'ko' })

  // 개발 환경에서는 CSP를 더 관대하게 설정
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  const cspContent = isDevelopment
    ? "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *; font-src 'self' data: *; img-src 'self' data: blob: *; connect-src 'self' *; frame-src *;"
    : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://utteranc.es https://www.googletagmanager.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src https://utteranc.es; object-src 'none'; base-uri 'self';"

  // 보안 헤더와 기존 폰트 로딩 포함
  setHeadComponents([
    ...HeadComponents,
    // Content Security Policy
    <meta
      key="csp"
      httpEquiv="Content-Security-Policy"
      content={cspContent}
    />,
    // XSS Protection
    <meta
      key="xss-protection"
      httpEquiv="X-XSS-Protection"
      content="1; mode=block"
    />,
    // Content Type Options
    <meta
      key="content-type-options"
      httpEquiv="X-Content-Type-Options"
      content="nosniff"
    />,
    // Frame Options (개발 환경에서는 비활성화)
    ...(isDevelopment ? [] : [
      <meta key="frame-options" httpEquiv="X-Frame-Options" content="DENY" />
    ]),
    // Referrer Policy
    <meta
      key="referrer-policy"
      name="referrer-policy"
      content="strict-origin-when-cross-origin"
    />,
  ])
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
