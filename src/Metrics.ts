export class Metrics {
  public wallTime: number

  public constructor(init?: Partial<Metrics>) {
    Object.assign(this, init)
  }
}
