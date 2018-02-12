import { ActionArgument, ActionTypes, ActionBase, ActionPayload, TextPayload, getActionArgumentValueAsPlainText } from './Action'

const createEmptyAction = (): ActionBase => ({
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
const cardActionArguments: ActionArgument[] = [
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
const cardAction: ActionBase = {
  ...createEmptyAction(),
  actionType: ActionTypes.CARD,
  payload: JSON.stringify({
    payload: expectedCardPayloadValue,
    arguments: cardActionArguments
  } as ActionPayload)
}

const expectedApiPayloadValue = 'myCallback'
const apiAction: ActionBase = {
  ...createEmptyAction(),
  actionType: ActionTypes.API_LOCAL,
  payload: JSON.stringify({
    payload: expectedApiPayloadValue,
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
  describe('GetPayload', () => {
    test('given text action should return the plain text string', () => {
      // Act
      const actualTextPayloadValue = ActionBase.GetPayload(textAction)

      // Assert
      expect(actualTextPayloadValue).toEqual(expectedTextPayloadValue)
    })

    test('given card action should return card template name', () => {
      // Act
      const actualCardPayloadValue = ActionBase.GetPayload(cardAction)

      // Assert
      expect(actualCardPayloadValue).toEqual(expectedCardPayloadValue)
    })

    test('given api action should return callback name', () => {
      // Act
      const actualApiPayloadValue = ActionBase.GetPayload(apiAction)

      // Assert
      expect(actualApiPayloadValue).toEqual(expectedApiPayloadValue)
    })
  })

  describe('GetActionArguments', () => {
    test('given text action should return empty array because text actions do not have arguments', () => {
      // Act
      const actionArguments = ActionBase.GetActionArguments(textAction)

      // Assert
      expect(actionArguments).toEqual([])
    })

    test('given card action or api action should return arguments', () => {
      // Act
      const actionArguments = ActionBase.GetActionArguments(cardAction)

      // Assert
      expect(actionArguments).toEqual(cardActionArguments)
    })
  })

  describe('GetActionArgumentValuesAsPlainText', () => {
    test('given action with arguments such as card action should return list of values', () => {
      // Act
      const actualCardValues = ActionBase.GetActionArgumentValuesAsPlainText(cardAction)

      // Assert
      expect(actualCardValues).toEqual(['p1.text', 'p2.text'])
    })
  })

  describe('getActionArgumentValueAsPlainText', () => {
    test('given legacy or new action argument both should return list of values', () => {
      // Arrange
      const actionArgumentLegacy: ActionArgument = {
        parameter: 'p1',
        value: 'p1value'
      }

      const actionArgumentNew: ActionArgument = {
        parameter: 'p1',
        value: {
          text: 'p1text',
          json: {}
        }
      }

      // Act
      const legacyTextValue = getActionArgumentValueAsPlainText(actionArgumentLegacy)
      const newTextValue = getActionArgumentValueAsPlainText(actionArgumentNew)

      // Assert
      expect(legacyTextValue).toEqual('p1value')
      expect(newTextValue).toEqual('p1text')
    })
  })
})
