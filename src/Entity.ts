export enum EntityType {
  LOCAL = 'LOCAL',
  LUIS = 'LUIS'
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

  isMultivalue: boolean

  /** If set, has a negative and positive version */
  isNegatible: boolean

  /** If Negatable, the Id of negative entity associates with this Entity */
  negativeId: string | null

  /** If a Negative, Id of positive entity associated with this Entity */
  positiveId: string | null
}

export interface LabeledEntity extends EntityBase {
  startCharIndex: number
  endCharIndex: number
  entityText: string
  resolution: {}
  builtinType: string
}

export interface PredictedEntity extends LabeledEntity {
  score: number
}

export interface EntityList {
  entities: EntityBase[]
}

export interface EntityIdList {
  entityIds: string[]
}
