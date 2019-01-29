import React from 'react'
import { render } from 'react-dom'

const App = ({greeting}) => <div>{ greeting }</div>

render(
  <App greeting='Hello, React Hooks!!!' />,
  document.getElementById('root')
)