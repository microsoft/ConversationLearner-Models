export class UserInput {
  public text: string

  public constructor(init?: Partial<UserInput>) {
    Object.assign(this, init)
  }
}
