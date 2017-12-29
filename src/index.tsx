import * as React from 'react'
import { render } from './renderer'
import MReact from './mreact'

const createElement = React.createElement

function MyButton() {
  return createElement('button', {}, 'Very custom button')
}

class MyCounter {
  render() {
    return createElement(
      'span',
      {}
      ['abcd'],
    )
  }
}

function getElementTree(ce) {
  return ce(
    'div',
    {},
    [
      'simple string child',
      ce(
        'p',
        {},
        'hey dudes',
      ),
      ce(
        MyButton,
        {},
        null,
      ),
    ],
  )
}

render(getElementTree(createElement), document.getElementById('root')!)