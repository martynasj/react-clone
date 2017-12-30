import { createVirtualDom } from './mreact'
import { resolveChildren} from './utils'

/**
 * Public Interface to the dom rendering
 */
export function render(virtualElement: VirtualElement, domNode: HTMLElement) {
  const virtualDom = createVirtualDom(virtualElement)
  console.log(virtualDom)
  // const domTree = renderHtmlTree(resolvedHtmlTree, domNode)
}


function renderHtmlTree(virtualHtmlElement, domNode: HTMLElement) {
  const domElement = createDomElement(virtualHtmlElement)
  renderElementIntoDom(domElement, domNode)
  const resolvedChildren = resolveChildren(virtualHtmlElement.children)
  resolvedChildren.forEach(child => renderHtmlTree(child, domElement))
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