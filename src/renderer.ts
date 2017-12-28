export function render(virtualElement: MReact.Element, domNode: HTMLElement) {
  const domTree = renderTree(virtualElement, domNode)
}

function renderTree(virtualElement: MReact.Element|string, domNode: HTMLElement) {
  if (typeof virtualElement === 'string') {
    domNode.innerText = domNode.innerText + virtualElement
    return
  } else {
    const resolvedChildren = resolveChildren(virtualElement.children)
    const domElement = createDomElement(virtualElement)
    renderElementIntoDom(domElement, domNode)

    resolvedChildren.forEach(child => {
      renderTree(child, domElement)
    })
  }
}

function renderElementIntoDom(domElement, domNode) {
  domNode.appendChild(domElement)
}

function createDomElement(element: MReact.Element): HTMLElement {
  const newElement = document.createElement(element.tag)
  return newElement
}

function resolveChildren(children?: MReact.ChildrenType|null): Array<string|MReact.Element> {
  if (!children) {
    return []
  }
  return Array.isArray(children) ? children : [children]
}