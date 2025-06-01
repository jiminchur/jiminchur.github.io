/**
 * 프로젝트 전체에서 사용되는 상수들
 */

// 사이트 기본 정보
export const SITE_CONFIG = {
  TITLE: 'Minchur Gatsby Blog',
  DESCRIPTION: '개발과 기술에 대한 이야기를 담은 블로그입니다.',
  URL: 'https://jiminchur.github.io',
  AUTHOR: 'MinChur',
  LOCALE: 'ko-KR',
} as const

// 페이징 설정
export const PAGINATION = {
  POSTS_PER_PAGE: 10,
  RELATED_POSTS_LIMIT: 3,
} as const

// 검색 설정
export const SEARCH_CONFIG = {
  MAX_RESULTS: 20,
  MIN_SEARCH_LENGTH: 2,
  DEBOUNCE_DELAY: 300,
} as const

// 읽기 경험 설정
export const READING_CONFIG = {
  WORDS_PER_MINUTE: 200,
  TABLE_OF_CONTENTS_MIN_HEADINGS: 3,
} as const

// 스타일 관련 상수
export const THEME = {
  BREAKPOINTS: {
    MOBILE: '768px',
    TABLET: '1024px',
    DESKTOP: '1200px',
  },
  Z_INDEX: {
    SCROLL_TO_TOP: 1000,
    SEARCH_DROPDOWN: 1001,
    MODAL: 1002,
    TOOLTIP: 1003,
  },
  ANIMATION: {
    DURATION: {
      FAST: '0.15s',
      NORMAL: '0.3s',
      SLOW: '0.5s',
    },
    EASING: {
      EASE_OUT: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      EASE_IN_OUT: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
  },
} as const

// 에러 메시지
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  NOT_FOUND: '요청하신 페이지를 찾을 수 없습니다.',
  INVALID_INPUT: '입력값이 올바르지 않습니다.',
  SEARCH_FAILED: '검색 중 오류가 발생했습니다.',
} as const

// 성공 메시지
export const SUCCESS_MESSAGES = {
  COPIED_TO_CLIPBOARD: '클립보드에 복사되었습니다!',
  SEARCH_COMPLETED: '검색이 완료되었습니다.',
} as const

// 라우트 경로
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  POSTS: '/posts',
  CATEGORIES: '/categories',
  SEARCH: '/search',
} as const

// 외부 링크
export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/jiminchur',
  LINKEDIN: 'https://linkedin.com/in/jiminchur',
} as const

// 개발 환경 설정
export const DEV_CONFIG = {
  LOG_LEVEL: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
  ENABLE_ANALYTICS: process.env.NODE_ENV === 'production',
} as const

// 정규식 패턴
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  SLUG: /^[a-z0-9-]+$/,
  KOREAN: /[가-힣]/,
  WHITESPACE: /\s+/g,
  HTML_TAGS: /<[^>]*>/g,
} as const
