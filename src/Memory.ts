export class MemoryValue {
  public userText: string | null = null
  public displayText: string | null = null
  public builtinType: string | null = null
  public resolution: {} = {}

  public constructor(init?: Partial<MemoryValue>) {
    Object.assign(this, init)
  }
}

export class Memory {
  public entityName: string
  public entityValues: MemoryValue[]

  public constructor(init?: Partial<Memory>) {
    Object.assign(this, init)
  }
}
