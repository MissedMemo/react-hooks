import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '../counter.jsx'

test( 'Counter should increment count', () => {
  const { container } = render(<Counter />)
  const button = container.firstChild
  expect( button.textContent ).toBe( 'You clicked 0 times so far...' )
  fireEvent.click(button)
  expect( button.textContent ).toBe( 'You clicked 1 times so far...' )
})