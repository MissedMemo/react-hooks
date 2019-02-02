import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '../counter.jsx'

const clearStorage = () => localStorage.removeItem('count')

beforeAll( clearStorage )
afterEach( clearStorage )

test( 'reads and sets local storage', () => {
  localStorage.setItem('count', 18)
  const { container, rerender } = render(<Counter initialValue={2} />)
  const button = container.firstChild
  expect( button.textContent ).toBe( 'You\'ve clicked 18 times!' )
  fireEvent.click(button)
  expect( button.textContent ).toBe( 'You\'ve clicked 19 times!' )

  rerender( <Counter /> ) // force synchronous update of localstorage
  expect( localStorage.getItem('count') ).toBe('19')
})