/** Information about the running bot */
export interface Template {
  name: string
  variables: TemplateVariable[]
  body?: string
  validationError: string
}

export interface TemplateVariable {
  key: string
  type: string
}
