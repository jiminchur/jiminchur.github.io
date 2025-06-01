/**
 * 날짜 관련 유틸리티 함수들
 */

/**
 * 날짜를 읽기 쉬운 형태로 포맷팅합니다
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * 상대적인 시간을 반환합니다 (예: "3일 전")
 */
export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) {
    return '오늘'
  } else if (diffInDays === 1) {
    return '어제'
  } else if (diffInDays < 7) {
    return `${diffInDays}일 전`
  } else if (diffInDays < 30) {
    const diffInWeeks = Math.floor(diffInDays / 7)
    return `${diffInWeeks}주 전`
  } else if (diffInDays < 365) {
    const diffInMonths = Math.floor(diffInDays / 30)
    return `${diffInMonths}개월 전`
  } else {
    const diffInYears = Math.floor(diffInDays / 365)
    return `${diffInYears}년 전`
  }
}

/**
 * ISO 날짜 문자열이 유효한지 검증합니다
 */
export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

/**
 * 날짜를 YYYY-MM-DD 형식으로 포맷팅합니다
 */
export const formatDateToYMD = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}
