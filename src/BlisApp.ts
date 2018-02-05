export class BlisAppMetaData {
  public botFrameworkApps: string[]

  public constructor(init?: Partial<BlisAppMetaData>) {
    ;(<any>Object).assign(this, init)
  }
}

export class BlisAppBase {
  public appName: string
  public appId: string
  public luisKey: string
  public locale: string
  public metadata: BlisAppMetaData
  trainingFailureMessage: string
  trainingStatus: TrainingStatusCode
  datetime: Date

  public constructor(init?: Partial<BlisAppBase>) {
    ;(<any>Object).assign(this, init)
  }
}

export class BlisAppList {
  public apps: BlisAppBase[]

  public constructor(init?: Partial<BlisAppList>) {
    ;(<any>Object).assign(this, init)
  }
}

export class BlisAppIdList {
  public appIds: string[]

  public constructor(init?: Partial<BlisAppIdList>) {
    ;(<any>Object).assign(this, init)
  }
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
