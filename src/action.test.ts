import { ActionTypes, ActionBase, ActionPayload, TextPayload } from './Action'

const createEmptyAction = (): ActionBase =>
    ({
        actionId: '',
        payload: '',
        isTerminal: false,
        requiredEntities: [],
        negativeEntities: [],
        suggestedEntity: '',
        version: 0,
        packageCreationId: 0,
        packageDeletionId: 0,
        actionType: ActionTypes.TEXT
    })

const expectedTextPayloadValue = 'expectedvalue'
const textAction: ActionBase = {
    ...createEmptyAction(),
    actionType: ActionTypes.TEXT,
    payload: JSON.stringify({
        text: expectedTextPayloadValue,
        json: {}
    } as TextPayload)
}

const expectedCardPayloadValue = 'customTemplateName'
const cardAction: ActionBase = {
    ...createEmptyAction(),
    actionType: ActionTypes.CARD,
    payload: JSON.stringify({
        payload: expectedCardPayloadValue,
        arguments: [
            {
                parameter: 'p1',
                value: {
                    text: 'p1.text',
                    json: {}
                }
            },
            {
                parameter: 'p2',
                value: {
                    text: 'p2.text',
                    json: {}
                }
            }
        ]
    } as ActionPayload)
}

describe('Action', () => {
    describe('ActionPayload', () => {
        test('GetPayload should return string of text for text payloads even though they are complext json objects', () => {
            // Arrange

            // Act
            const actualTextPayloadValue = ActionBase.GetPayload(textAction)

            // Assert
            expect(actualTextPayloadValue).toEqual(expectedTextPayloadValue)
        })

        test('GetPayload should return card template name for card actions', () => {
            // Arrange

            // Act
            const actualCardPayloadValue = ActionBase.GetPayload(cardAction)

            // Assert
            expect(actualCardPayloadValue).toEqual(expectedCardPayloadValue)
        })
    })

    describe('getActionArgumentValuesAsPlainText', () => {
        test('should return list of values', () => {
            // Arrange

            // Act
            const actualCardValues = ActionBase.GetActionArgumentValuesAsPlainText(cardAction)

            // Assert
            expect(actualCardValues).toEqual(['p1.text', 'p2.text'])
        })
    })
})