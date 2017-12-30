import { createVirtualDom } from './mreact'
import { resolveChildren} from './utils'

/**
 * Public Interface to the dom rendering
 */
export function render(virtualElement: VirtualElement, domNode: HTMLElement) {
  const virtualDom = createVirtualDom(virtualElement)
  renderHtmlTree(virtualDom, domNode)
}


function renderHtmlTree(virtualNode: VirtualNode, domNode: HTMLElement) {
  const domElement = createDomElement(virtualNode)
  renderHTMLElementIntoDom(domElement, domNode)

  if (typeof virtualNode === 'object' && virtualNode.children) {
    const resolvedChildren = resolveChildren(virtualNode.children)
    resolvedChildren.forEach(child => renderHtmlTree(child, domElement as HTMLElement))
  }
}

function renderHTMLElementIntoDom(domElement: HTMLElement|Text, parentNode: HTMLElement) {
  parentNode.appendChild(domElement)
}

function createDomElement(virtualNode: VirtualNode): HTMLElement|Text {
  if (typeof virtualNode === 'object') {
    return document.createElement(virtualNode.tag)
  } else {
    return document.createTextNode(virtualNode.toString())
  }
}