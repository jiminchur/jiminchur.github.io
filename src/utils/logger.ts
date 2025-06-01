/**
 * 로깅 유틸리티
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'
type LogData =
  | Record<string, unknown>
  | Error
  | string
  | number
  | boolean
  | null

interface LoggerConfig {
  level: LogLevel
  enableConsole: boolean
  enableRemote: boolean
}

class Logger {
  private config: LoggerConfig

  constructor(config: LoggerConfig) {
    this.config = config
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    }

    return levels[level] >= levels[this.config.level]
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    data?: LogData,
  ): string {
    const timestamp = new Date().toISOString()
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`

    if (data) {
      return `${prefix} ${message} ${JSON.stringify(data, null, 2)}`
    }

    return `${prefix} ${message}`
  }

  debug(message: string, data?: LogData): void {
    if (!this.shouldLog('debug')) return

    if (this.config.enableConsole) {
      console.debug(this.formatMessage('debug', message, data))
    }
  }

  info(message: string, data?: LogData): void {
    if (!this.shouldLog('info')) return

    if (this.config.enableConsole) {
      console.info(this.formatMessage('info', message, data))
    }
  }

  warn(message: string, data?: LogData): void {
    if (!this.shouldLog('warn')) return

    if (this.config.enableConsole) {
      console.warn(this.formatMessage('warn', message, data))
    }
  }

  error(message: string, error?: Error | LogData): void {
    if (!this.shouldLog('error')) return

    const formattedMessage = this.formatMessage('error', message, error)

    if (this.config.enableConsole) {
      console.error(formattedMessage)
    }

    // 프로덕션에서는 에러 리포팅 서비스로 전송 가능
    if (this.config.enableRemote && process.env.NODE_ENV === 'production') {
      this.sendToRemote()
    }
  }

  private sendToRemote(): void {
    // 실제 에러 리포팅 서비스 (Sentry, LogRocket 등)로 전송
    // 여기서는 구현 예시만 제공
    try {
      // fetch('/api/logs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ level, message, data, timestamp: new Date().toISOString() })
      // })
    } catch (error) {
      console.error('Failed to send log to remote service:', error)
    }
  }
}

// 싱글톤 로거 인스턴스 생성
const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
  enableConsole: true,
  enableRemote: process.env.NODE_ENV === 'production',
})

export default logger

// 편의 함수들
export const logDebug = (message: string, data?: LogData) =>
  logger.debug(message, data)
export const logInfo = (message: string, data?: LogData) =>
  logger.info(message, data)
export const logWarn = (message: string, data?: LogData) =>
  logger.warn(message, data)
export const logError = (message: string, error?: Error | LogData) =>
  logger.error(message, error)
