// 深度链接导入请求类型（独立于生成的 bindings，避免生成差异）

export interface DeepLinkImportRequest {
  version: string
  resource: string
  app: string
  name: string
  homepage: string
  endpoint: string
  apiKey: string
  model?: string
  notes?: string
  haikuModel?: string
  sonnetModel?: string
  opusModel?: string
  config?: string
  configFormat?: string
  configUrl?: string
}
