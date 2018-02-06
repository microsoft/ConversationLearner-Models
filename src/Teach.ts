import { Memory } from './Memory'
import { ScoreResponse, ScoreInput } from './Score'

export enum DialogMode {
  Extractor = 'Extract', // Waiting for Extractor feedback
  Scorer = 'Score', // Waiting for Scorer feedback
  Wait = 'Wait' // Waiting for user input
}

export class Teach {
  public teachId: string
  public trainDialogId: string
  public createdDatetime: string
  public lastQueryDatetime: string
  public packageId: number

  public constructor(init?: Partial<Teach>) {
    Object.assign(this, init)
  }
}

export class TeachResponse {
  public packageId: number
  public teachId: string
  public trainDialogId: string

  public constructor(init?: Partial<TeachResponse>) {
    Object.assign(this, init)
  }
}

export class TeachList {
  public teaches: Teach[]

  public constructor(init?: Partial<TeachList>) {
    Object.assign(this, init)
  }
}

export class TeachIdList {
  public teachIds: string[]

  public constructor(init?: Partial<TeachIdList>) {
    Object.assign(this, init)
  }
}

export class TeachWithHistory {
  public teach: Teach
  public history: any[]
  public memories: Memory[]
  public prevMemories: Memory[]
  public dialogMode: DialogMode
  public scoreResponse: ScoreResponse
  public scoreInput: ScoreInput
  public discrepancies: string[]

  public constructor(init?: Partial<TeachWithHistory>) {
    Object.assign(this, init)
  }
}
