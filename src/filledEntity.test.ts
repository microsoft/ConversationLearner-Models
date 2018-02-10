import { FilledEntity, filledEntityValueAsString } from './blis-models'

const createFilledEntity = (values: string[]): FilledEntity => {
  return {
    entityId: '',
    values: values.map(v => ({
      builtinType: '',
      resolution: {},
      displayText: v,
      userText: v
    }))
  }
}

describe('filledEntity', () => {
  describe('filledEntityValueAsString', () => {
    test('given filled entity return pretty form of values', () => {
      // Arrange
      const filledEntity = createFilledEntity(['d1', 'd2', 'd3'])
      const expected = 'd1, d2 and d3'

      // Assert
      expect(filledEntityValueAsString(filledEntity)).toEqual(expected)
    })
  })
})
