export class Metrics {
  public wallTime: number

  public constructor(init?: Partial<Metrics>) {
    ;(<any>Object).assign(this, init)
  }
}
