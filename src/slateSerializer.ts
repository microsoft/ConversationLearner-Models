// TODO: Copied from BLIS-UI Need to improve Action design to find out how to consolidate knowledge to single layer
// Originally blis-models was intended to know have to understand the tree structure which is why we added the
// pre-serialized 'text' field; however, now can't use the text field becuase it includes entity id's instead of human-readable names
// Instead of having to decide wether to perform substitutions from the serialized text or from the tree it's better to
// just have single method used everywhere

// Can't import because it's from blis-ui
//import { NodeTypes } from "./models";
enum NodeTypes {
  Mention = 'mention-inline-node',
  Optional = 'optional-inline-node'
}
const startCharacter = '$'

// Based on: https://github.com/ianstormtaylor/slate/blob/master/packages/slate-plain-serializer/src/index.js

function serialize(value: any, entityValues: Map<string, string>, fallbackToOriginal: boolean = false): string {
  return serializeNode(value.document, entityValues, fallbackToOriginal)
}

function serializeNode(node: any, entityValues: Map<string, string>, fallbackToOriginal: boolean = false): string {
  if (node.kind == 'document') {
    return node.nodes.map((n: any) => serializeNode(n, entityValues)).join('\n')
  } else if (node.kind == 'block') {
    return node.nodes.map((n: any) => serializeNode(n, entityValues)).join('')
  } else if (node.kind === 'inline' && node.type === NodeTypes.Mention) {
    // This check is required becuase when input is Slate Value node is Immutable.Map object
    // but it could also be a node from value.toJSON()
    const data = typeof node.data.toJS === 'function' ? node.data.toJS() : node.data
    const option = data.option

    if (!option) {
      throw new Error(`Attempting to serialize inline node but it did not have option`)
    }

    const entityId = option.id

    // TODO: Shared triggerCharacter from plugin
    const mapContainsEntity = entityValues.has(entityId)
    if (!mapContainsEntity) {
      if (fallbackToOriginal) {
        return node.nodes.map((n: any) => serializeNode(n, entityValues)).join('')
      }

      const entityValuesString = Array.from(entityValues.entries())
        .map(([id, value]) => `${id}: ${value}`)
        .join(', ')
      throw new Error(
        `Inline node representing entity ${entityId} was provided a vavlue in the given entityValue map: ${entityValuesString}`
      )
    }

    return entityValues.get(entityId)!
  } else if (node.kind === 'text') {
    // This check is required becuase when input is Slate Value nodes have computed text which serializes children
    // otherwise, manually serialize leaves
    return typeof node.text === 'string' ? node.text : node.leaves.map((n: any) => n.text).join('')
  } else {
    return node.nodes.map((n: any) => serializeNode(n, entityValues)).join('')
  }
}

export default {
  serialize
}
