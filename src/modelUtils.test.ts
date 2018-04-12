import { ModelUtils } from './ConversationLearner-Models'

describe('ModelUtils', () => {
  describe('RemoveWords', () => {
    test('given empty string return empty string', () => {
      expect(ModelUtils.RemoveWords('', 0)).toEqual('')
    })

    test('given string and removing 0 words return string', () => {
      expect(ModelUtils.RemoveWords('test', 0)).toEqual('test')
    })

    test('given string with 2 word and removing 1 word return word', () => {
      expect(ModelUtils.RemoveWords('test1 test2', 1)).toEqual('test2')
    })
  })
})
