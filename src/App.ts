/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { TrainDialog } from './TrainDialog'

export interface AppMetaData {
  botFrameworkApps: string[]
  markdown?: string
  video?: string
  isLoggingOn: boolean
}

export interface AppBase {
  appName: string
  appId: string
  createdDateTime: string
  lastModifiedDateTime: string
  locale: string
  luisAppId: string
  metadata: AppMetaData
  trainingFailureMessage: string | null
  trainingStatus: TrainingStatusCode
  datetime: Date
  packageVersions: PackageReference[]
  livePackageId: string
  devPackageId: string
}

export interface AppList {
  apps: AppBase[]
}

export interface AppIdList {
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
  trainingFailureMessage: string | null
}

export interface PackageReference {
  packageId: string
  packageVersion: string
}

// TODO: replace with json structure rather than parse
export function parseTrainingError(app: AppBase): any | null {
  if (app.trainingStatus !== TrainingStatusCode.Failed || !app.trainingFailureMessage) {
    return null
  }
  return parseTrainingFailureMessage(app.trainingFailureMessage)
}

// TODO: replace with json structure rather than parse
export function parseTrainingFailureMessage(trainingFailureMessage: string): any | null {
  // TODO: Use error code rather than brittle text lookup
  /*
  trainingFailureMessage: "[Trainer version 0001 2018-07-30]: 
  Conflicting entity labels for user input text 'this is conflict': trainDialogs: 
  ['dialogId: 96b373c7-5872-41ba-98f2-91fc1b23d4c3, rounds: [0]'], 
  entity label: [{'entityName': 'c56fb3b8-923c-4d58-9150-838616e29913', 'endCharIndex': 15, 'startCharIndex': 8}] 
  vs trainDialogID 8fd59c78-dd59-435d-afdc-8e710cd42a8d, round 1, entity label: []"
  */
  if (trainingFailureMessage.indexOf('Conflicting entity labels for user input') === -1) {
    return null
  }

  const td1sk = 'dialogId: '
  const td1ek = ', rounds: ['
  const r1ek = `]'],`

  let td1Start = trainingFailureMessage.indexOf(td1sk) + td1sk.length
  let td1End = trainingFailureMessage.indexOf(td1ek)
  let r1Start = td1End + td1ek.length
  let r1End = trainingFailureMessage.indexOf(r1ek)

  let trainDialogId1 = trainingFailureMessage.slice(td1Start, td1End)
  let round1 = trainingFailureMessage.slice(r1Start, r1End)

  const esk = `{'entityName': '`
  const eek = `', 'endCharIndex'`
  let eStart = trainingFailureMessage.indexOf(esk) + esk.length
  let eEnd = trainingFailureMessage.indexOf(eek)
  let entityId = trainingFailureMessage.slice(eStart, eEnd)

  const td2sk = 'vs trainDialogID '
  const td2ek = ', round '
  const r2ek = `, entity`
  let td2Start = trainingFailureMessage.indexOf(td2sk) + td2sk.length
  let td2End = trainingFailureMessage.indexOf(td2ek)
  let r2Start = td2End + td2ek.length
  let trainDialogId2 = trainingFailureMessage.slice(td2Start, td2End)
  let r2sub = trainingFailureMessage.slice(r2Start, r2Start + 100)
  let r2End = r2sub.indexOf(r2ek)
  let round2 = r2sub.slice(0, r2End)

  return { trainDialogId1, roundIndex1: +round1, trainDialogId2, roundIndex2: +round2, entityId }
}
