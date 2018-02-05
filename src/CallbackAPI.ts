/** Information about the running bot */
export class CallbackAPI {
  public name: string

  public arguments: string[]

  public constructor(init?: Partial<CallbackAPI>) {
    Object.assign(this, init)
  }
}
