export interface MemoryValue {
  userText: string | null
  displayText: string | null
  builtinType: string | null
  resolution: {}
}

export interface Memory {
  entityName: string
  entityValues: MemoryValue[]
}
