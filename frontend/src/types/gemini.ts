// Gemini 相关类型定义（独立于生成的 bindings，避免生成差异导致编译失败）

export type GeminiAuthType = 'oauth-personal' | 'gemini-api-key' | 'packycode' | 'generic'

export interface GeminiProvider {
  id: string
  name: string
  websiteUrl?: string
  apiKeyUrl?: string
  baseUrl?: string
  apiKey?: string
  model?: string
  description?: string
  category?: string // official, third_party, custom
  partnerPromotionKey?: string
  enabled: boolean
  envConfig?: Record<string, string>
  settingsConfig?: Record<string, any>
}

export interface GeminiPreset {
  name: string
  websiteUrl: string
  apiKeyUrl?: string
  baseUrl?: string
  model?: string
  description?: string
  category: string
  partnerPromotionKey?: string
  envConfig?: Record<string, string>
}

export interface GeminiStatus {
  enabled: boolean
  currentProvider?: string
  authType: GeminiAuthType
  hasApiKey: boolean
  hasBaseUrl: boolean
  model?: string
}
