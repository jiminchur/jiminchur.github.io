/**
 * 문자열 처리 관련 유틸리티 함수들
 */

/**
 * 문자열을 truncate 합니다
 */
export const truncateString = (
  str: string,
  maxLength: number,
  suffix = '...',
): string => {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - suffix.length) + suffix
}

/**
 * 문자열을 kebab-case로 변환합니다
 */
export const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * 문자열을 camelCase로 변환합니다
 */
export const toCamelCase = (str: string): string => {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[A-Z]/, char => char.toLowerCase())
}

/**
 * 문자열의 첫 글자를 대문자로 변환합니다
 */
export const capitalize = (str: string): string => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * 문자열에서 특수문자를 제거합니다
 */
export const removeSpecialChars = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9가-힣\s]/g, '')
}

/**
 * 읽기 시간을 계산합니다 (평균 읽기 속도: 분당 200단어)
 */
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const readingTime = Math.ceil(words / wordsPerMinute)
  return Math.max(1, readingTime) // 최소 1분
}

/**
 * URL에서 슬러그를 추출합니다
 */
export const extractSlugFromUrl = (url: string): string => {
  const parts = url.split('/')
  return parts[parts.length - 1] || parts[parts.length - 2] || ''
}

/**
 * 검색어를 하이라이트합니다
 */
export const highlightSearchTerm = (
  text: string,
  searchTerm: string,
): string => {
  if (!searchTerm) return text

  const regex = new RegExp(`(${searchTerm})`, 'gi')
  return text.replace(regex, '<mark>$1</mark>')
}
