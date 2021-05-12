import { screen, render } from '@testing-library/react'
import App from '../components/App'
import '@testing-library/jest-dom'

describe('App should render', () => {
  test('render', () => {
    render(<App />)
  })
})

describe('Links', () => {
  test('Should contain header link', () => {
    render(<App />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  test('Should contain github link', () => {
    const expected = 'https://github.com/vaibhavmande/sugar-log'

    render(<App />)
    const link = screen.getByTestId('header')

    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual(expected)
  })

  test('Should contain App header', () => {
    render(<App />)
    expect(screen.getByText('Sugar log')).toBeTruthy()
  })
})
