/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Memory } from './Memory'
import { ScoreResponse, ScoreInput } from './Score'
import { ReplayError } from './ReplayError'
import { UIScoreInput } from './UI'
import { ActionBase } from './Action'
import { ExtractResponse } from './Extract'

export enum DialogMode {
  Extractor = 'Extract', // Waiting for Extractor feedback
  Scorer = 'Score', // Waiting for Scorer feedback
  Wait = 'Wait', // Waiting for user input,
  EndSession = 'EndSession' // Dialog is over - EndSesssion Action has been called
}

export interface Teach {
  teachId: string
  trainDialogId: string
  createdDatetime: string | undefined
  lastQueryDatetime: string | undefined
  packageId: number | undefined
}

export interface TeachResponse {
  packageId: number
  teachId: string
  trainDialogId: string
}

export interface TeachList {
  teaches: Teach[]
}

export interface TeachIdList {
  teachIds: string[]
}

export enum HistoryMode {
  /** Only return next Score, abandoning TeachSession */
  SCORE_ONLY = 'SCORE_ONLY',
  /** Only return extraction, abandoning TeachSession */
  EXTRACT_ONLY = 'EXTRACT_ONLY',
  /** Keep TeachSession Open */
  CONTINUE = 'CONTINUE' // Waiting for user input,
}

export interface TeachWithHistory {
  teach: Teach | undefined
  history: any[]
  memories: Memory[]
  prevMemories: Memory[]
  dialogMode: DialogMode
  scoreResponse: ScoreResponse | undefined
  scoreInput: ScoreInput | undefined
  extractResponse: ExtractResponse | undefined
  uiScoreInput: UIScoreInput | undefined
  lastAction: ActionBase | null
  replayErrors: ReplayError[]
}
