import { ScoreResponse, ScoreInput } from './Score'
import { ExtractResponse } from './Extract'
import { Metrics } from './Metrics'

export class LogExtractorStep extends ExtractResponse {
  public stepBeginDatetime: string
  public stepEndDatetime: string

  public constructor(init?: Partial<LogExtractorStep>) {
    super(init)
    ;(<any>Object).assign(this, init)
  }
}

export class LogScorerStep {
  public input: ScoreInput
  public predictedAction: string
  public predictionDetails: ScoreResponse
  public stepBeginDatetime: string
  public stepEndDatetime: string
  public metrics: Metrics

  public constructor(init?: Partial<LogScorerStep>) {
    ;(<any>Object).assign(this, init)
  }
}

export class LogRound {
  public extractorStep: LogExtractorStep
  public scorerSteps: LogScorerStep[]

  public constructor(init?: Partial<LogRound>) {
    ;(<any>Object).assign(this, init)
  }
}

export class LogDialog {
  public logDialogId: string
  public dialogBeginDatetime: string
  public dialogEndDatetime: string
  public packageId: number
  public metrics: string
  public rounds: LogRound[]

  public constructor(init?: Partial<LogDialog>) {
    ;(<any>Object).assign(this, init)
  }
}

export class LogDialogList {
  public logDialogs: LogDialog[]

  public constructor(init?: Partial<LogDialogList>) {
    ;(<any>Object).assign(this, init)
  }
}

export class LogDialogIdList {
  public logDialogIds: string[]

  public constructor(init?: Partial<LogDialogIdList>) {
    ;(<any>Object).assign(this, init)
  }
}
