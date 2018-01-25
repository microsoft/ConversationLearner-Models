import { ActionTypes, ActionBase, ActionMetaData, TextPayload } from './Action'

describe('Action', () => {
     describe('ActionPayload', () => {
         test('GetPayload should return string of text for text payloads even though they are complext json objects', () => {
            // Arrange
            const expected = 'expectedvalue'
            const action = new ActionBase({
                metadata: new ActionMetaData({
                    actionType: ActionTypes.TEXT
                }),
                payload: JSON.stringify({
                    text: expected,
                    json: {}
                } as TextPayload)
            })

            // Act
            const actual = ActionBase.GetPayload(action)

            // Assert
            expect(actual).toEqual(expected)
         })
     })
})