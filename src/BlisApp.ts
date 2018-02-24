export interface BlisAppMetaData {
  botFrameworkApps: string[]
  markdown: string
  video: string
  isLoggingOn: boolean
}

export interface BlisAppBase {
  appName: string
  appId: string
  luisKey: string
  locale: string
  metadata: BlisAppMetaData
  trainingFailureMessage: string
  trainingStatus: TrainingStatusCode
  datetime: Date
}

export interface BlisAppList {
  apps: BlisAppBase[]
}

export interface BlisAppIdList {
  appIds: string[]
}

export enum TrainingStatusCode {
  Queued = 'queued',
  Running = 'running',
  Completed = 'completed',
  Failed = 'failed'
}

export interface TrainingStatus {
  trainingStatus: TrainingStatusCode
  trainingFailureMessage: string | null | undefined
}
