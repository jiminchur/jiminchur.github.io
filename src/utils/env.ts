/**
 * 환경변수 유효성 검증 및 관리 유틸리티
 */

interface EnvironmentConfig {
  CONTENTFUL_SPACE_ID: string
  CONTENTFUL_ACCESS_TOKEN: string
  GOOGLE_ANALYTICS_ID?: string
}

/**
 * 필수 환경변수가 설정되어 있는지 확인
 */
export function validateEnvironment(): EnvironmentConfig {
  const config: Partial<EnvironmentConfig> = {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  }

  // 필수 환경변수 검증
  const requiredEnvVars = [
    'CONTENTFUL_SPACE_ID',
    'CONTENTFUL_ACCESS_TOKEN',
  ] as const

  const missingVars = requiredEnvVars.filter(key => !config[key])

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}\n` +
        'Please check your .env file and make sure all required variables are set.',
    )
  }

  // 환경변수 값 검증
  if (config.CONTENTFUL_SPACE_ID && config.CONTENTFUL_SPACE_ID.length < 10) {
    console.warn('CONTENTFUL_SPACE_ID appears to be invalid (too short)')
  }

  if (
    config.CONTENTFUL_ACCESS_TOKEN &&
    config.CONTENTFUL_ACCESS_TOKEN.length < 40
  ) {
    console.warn('CONTENTFUL_ACCESS_TOKEN appears to be invalid (too short)')
  }

  return config as EnvironmentConfig
}

/**
 * 개발/프로덕션 환경 구분
 */
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'

/**
 * 안전한 환경변수 접근
 */
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key]
  if (!value && !defaultValue) {
    console.warn(`Environment variable ${key} is not set`)
    return ''
  }
  return value || defaultValue || ''
}
