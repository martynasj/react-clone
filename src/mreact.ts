import { resolveChildren } from './utils'

// Public Interface
export default {
  createElement(
    elementTag: VirtualElementType,
    props: undefined|null|{},
    children: null|string|Array<any>
  ): VirtualElement {
    const virtualElement = {
      type: elementTag,
      props: {...props} as any, // copy props?
    }

    if (children) {
      virtualElement.props.children = children
    }

    return virtualElement
  }
}

/**
 * Converts component tree into virtual html valid tree
 * (leaves only native dom nodes, without user defined custom components)
 */
export function createVirtualDom(virtualElement: VirtualElement) {
  // For primitive elements we just return that same element
  if (typeof virtualElement === 'string' || typeof virtualElement === 'number') {
    return virtualElement
  }

  if (typeof virtualElement.type === 'function') {
    // For component types we need to look at their subtree
    const subTree = virtualElement.type(virtualElement.props)
    return createVirtualDom(subTree)
  } else {
    // For native dom virtual components, we return virtual dom node
    return {
      tag: virtualElement.type,
      attributes: virtualElement.props, // todo: exclude children from attributes
      children: resolveChildren(virtualElement.props.children).map(child => {
        return createVirtualDom(child)
      })
    }
  }
}