/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { EntityBase } from './Entity'
import { ActionBase } from './Action'
import { TrainDialog } from './TrainDialog'

export interface AppDefinition {
  entities: EntityBase[]
  actions: ActionBase[]
  trainDialogs: TrainDialog[]
}

export interface AppDefinitionChange {
  currentAppDefinition: AppDefinition
  updatedAppDefinition: AppDefinition | undefined
}
