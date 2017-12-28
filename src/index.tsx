import { render } from './renderer'
import MReact from './mreact'

const element = MReact.createElement(
  'div',
  {},
  [
    MReact.createElement(
      'p',
      {},
      'hey dudes',
    ),
    MReact.createElement(
      'button',
      {},
      'my button',
    ),
  ],
)

render(element, document.getElementById('root'))