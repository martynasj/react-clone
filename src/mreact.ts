type ComponentOrHTMLTag = keyof HTMLElementTagNameMap
type PropsType = null|undefined|{ children?: MReact.ChildrenType }

export default {
  createElement(elementTag: ComponentOrHTMLTag, props: PropsType, children: MReact.ChildrenType): VirtualElement {
    return createVirtualElement(elementTag, props, children)
  }
}

function createVirtualElement(
  elementTag: ComponentOrHTMLTag,
  props: PropsType,
  children: MReact.ChildrenType
): VirtualElement {
  const virtualElement = {
    type: elementTag,
    props: props || {},
  }

  if (children) {
    virtualElement.props.children = children
  }

  return virtualElement
}