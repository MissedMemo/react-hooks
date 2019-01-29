import React from 'react'
import { render } from 'react-dom'

import App from './1-useState/demo'

render(
  <App greeting='Hello, React Hooks!' />,
  document.getElementById('root')
)