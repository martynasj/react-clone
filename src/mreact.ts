type ComponentOrHTMLTag = keyof HTMLElementTagNameMap
type PropsType = object

export default {
  createElement(elementTag: ComponentOrHTMLTag, props: PropsType, children: MReact.ChildrenType): MReact.Element {
    return createVirtualElement(elementTag, props, children)
  }
}

function createVirtualElement(
  elementTag: ComponentOrHTMLTag,
  props: PropsType,
  children: MReact.ChildrenType
): MReact.Element {
  const virtualElement = {
    tag: elementTag,
    children,
  }
  return virtualElement
}