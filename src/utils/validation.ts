/**
 * 입력 검증 및 XSS 방지 유틸리티 함수들
 */

/**
 * 문자열을 안전하게 정리합니다
 */
export const sanitizeString = (
  str: string | undefined,
  maxLength = 300,
): string => {
  if (!str) return ''

  return str
    .replace(/[<>]/g, '') // 기본적인 HTML 태그 제거
    .replace(/javascript:/gi, '') // javascript: 프로토콜 제거
    .replace(/on\w+\s*=/gi, '') // 이벤트 핸들러 제거
    .trim()
    .slice(0, maxLength) // 최대 길이 제한
}

/**
 * URL을 안전하게 정리합니다
 */
export const sanitizeUrl = (url: string | undefined): string => {
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

/**
 * HTML 태그를 완전히 제거합니다
 */
export const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, '')
}

/**
 * 이메일 주소가 유효한지 검증합니다
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * 슬러그가 유효한지 검증합니다
 */
export const isValidSlug = (slug: string): boolean => {
  const slugRegex = /^[a-z0-9-]+$/
  return slugRegex.test(slug)
}
