import {
  ActionTypes,
  ActionBase,
  ActionPayload,
  TextPayload,
  getActionArgumentValueAsPlainText
} from './Action'
import { ActionArgument } from './blis-models'

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
  metadata: {
    actionType: ActionTypes.TEXT
  }
})

const expectedTextPayloadValue = 'expectedvalue'
const textAction: ActionBase = {
  ...createEmptyAction(),
  metadata: {
    actionType: ActionTypes.TEXT
  },
  payload: JSON.stringify({
    text: expectedTextPayloadValue,
    json: {}
  } as TextPayload)
}

const expectedCardPayloadValue = 'customTemplateName'
const cardAction: ActionBase = {
  ...createEmptyAction(),
  metadata: {
    actionType: ActionTypes.CARD
  },
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

const expectedApiPayloadValue = 'myCallback'
const apiAction: ActionBase = {
  ...createEmptyAction(),
  metadata: {
    actionType: ActionTypes.API_LOCAL
  },
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

    test('GetPayload should return callback name for API actions', () => {
      // Arrange

      // Act
      const actualApiPayloadValue = ActionBase.GetPayload(apiAction)

      // Assert
      expect(actualApiPayloadValue).toEqual(expectedApiPayloadValue)
    })
  })

  describe('GetActionArgumentValuesAsPlainText', () => {
    test('should return list of values', () => {
      // Arrange

      // Act
      const actualCardValues = ActionBase.GetActionArgumentValuesAsPlainText(
        cardAction
      )

      // Assert
      expect(actualCardValues).toEqual(['p1.text', 'p2.text'])
    })
  })

  describe('getActionArgumentValueAsPlainText', () => {
    test('should return list of values', () => {
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
      const legacyTextValue = getActionArgumentValueAsPlainText(
        actionArgumentLegacy
      )
      const newTextValue = getActionArgumentValueAsPlainText(actionArgumentNew)

      // Assert
      expect(legacyTextValue).toEqual('p1value')
      expect(newTextValue).toEqual('p1text')
    })
  })
})
