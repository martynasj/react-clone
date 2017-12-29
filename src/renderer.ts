/**
 * Public Interface to the dom rendering
 */
export function render(virtualElement: AllowedElement, domNode: HTMLElement) {
  const resolvedHtmlTree = resolveHtmlTree(virtualElement)
  const domTree = renderHtmlTree(resolvedHtmlTree, domNode)
}


function renderHtmlTree(virtualHtmlElement, domNode: HTMLElement) {
  const domElement = createDomElement(virtualHtmlElement)
  renderElementIntoDom(domElement, domNode)
  const resolvedChildren = resolveChildren(virtualHtmlElement.children)
  resolvedChildren.forEach(child => renderHtmlTree(child, domElement))
}


/**
 * Converts virtual tree into virtual html valid tree
 * (leaves only native dom nodes, without user defined custom components)
 */
function resolveHtmlTree(virtualElement) {
  // primitive element
  if (typeof virtualElement === 'string') {
    return {
      tag: 'span',
      innerText: virtualElement,
    }
  }
  // native dom element
  if (typeof virtualElement.type === 'string') {
    const resolvedChildren = resolveChildren(virtualElement.props.children)

    const nativeElement = {
      tag: virtualElement.type,
      children: resolvedChildren.map(child => {
        return resolveHtmlTree(child)
      }),
    }

    return nativeElement
  }

  // custom SFC or Class component
  const renderedResult = virtualElement.type()
  return resolveHtmlTree(renderedResult)
}

function renderElementIntoDom(domElement, parentNode) {
  parentNode.appendChild(domElement)
}

function createDomElement(virtualHtmlElement): HTMLElement {
  const newDomElement = document.createElement(virtualHtmlElement.tag)
  if (virtualHtmlElement.innerText) {
    newDomElement.innerText = virtualHtmlElement.innerText
  }
  return newDomElement
}

function resolveChildren<T>(children?: Array<T>|T): Array<T> {
  if (!children) {
    return []
  }
  return Array.isArray(children) ? children : [children]
}