export enum EntityType {
  LOCAL = 'LOCAL',
  LUIS = 'LUIS'
}

export interface EntityMetaData {
  isBucket: boolean
  /** If set, has a negative and positive version */
  isReversable: boolean
  /** If Negatable, the Id of negative entity associates with this Entity */
  negativeId: string | null
  /** If a Negative, Id of positive entity associated with this Entity */
  positiveId: string | null
  /** Make negate of given metadata */
}

export const makeNegative = (entityMetadata: EntityMetaData, posId: string): EntityMetaData => ({
  ...entityMetadata,
  negativeId: null,
  positiveId: posId
})

export interface EntityBase {
  entityId: string
  entityName: string
  entityType: string
  version: number
  packageCreationId: number
  packageDeletionId: number
  metadata: EntityMetaData
}

export interface EntityList {
  entities: EntityBase[]
}

export interface EntityIdList {
  entityIds: string[]
}
