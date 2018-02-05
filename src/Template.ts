/** Information about the running bot */
export class Template {
  public name: string

  public variables: TemplateVariable[]

  public body?: string

  public validationError: string

  public constructor(init?: Partial<Template>) {
    Object.assign(this, init)
  }
}

export class TemplateVariable {
  public key: string
  public type: string

  public constructor(init?: Partial<TemplateVariable>) {
    Object.assign(this, init)
  }
}
