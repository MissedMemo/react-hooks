import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '../counter.jsx'

test( 'Counter should default to zero', () => {
  const { container } = render(<Counter />)
  const button = container.firstChild
  expect( button.textContent ).toBe( 'You\'ve clicked 0 times!' )
})

test( 'Counter should increment count', () => {
  const { container } = render(<Counter />)
  const button = container.firstChild
  expect( button.textContent ).toBe( 'You\'ve clicked 0 times!' )
  fireEvent.click(button)
  expect( button.textContent ).toBe( 'You\'ve clicked 1 times!' )
})

test( 'Counter should support setting an initial value', () => {
  const { container } = render(<Counter initialValue={2} />)
  const button = container.firstChild
  expect( button.textContent ).toBe( 'You\'ve clicked 2 times!' )
  fireEvent.click(button)
  expect( button.textContent ).toBe( 'You\'ve clicked 3 times!' )
})