import { screen, render, fireEvent } from '@testing-library/react'
import AddEntry from '../components/blocks/AddEntry/AddEntry'
import '@testing-library/jest-dom'

const props = {
  entries: [],
  open: true,
  setEntries: jest.fn(),
  type: 'fasting',
  setOpen: jest.fn(),
}

describe('Render', () => {
  test('render', () => {
    render(<AddEntry {...props} />)
  })
  test('hide', () => {
    render(<AddEntry {...props} open={false} />)
    expect(screen.queryByTestId('add-form-parent')).not.toBeInTheDocument()
  })
})

describe('Props', () => {
  test('Should display type', () => {
    render(<AddEntry {...props} />)
    expect(screen.getByText("Add today's fasting entry")).toBeTruthy()
  })
  test('Button should be disabled', () => {
    render(<AddEntry {...props} />)
    const input = screen.getByTestId('form-input')
    const button = screen.getByTestId('add-button')

    fireEvent.change(input, { target: { value: 1000 } })
    expect(button).toBeDisabled()

    fireEvent.change(input, { target: { value: 150 } })
    expect(button).not.toBeDisabled()
  })
})

describe('update entry object', () => {
  render(<AddEntry {...props} />)
  const input = screen.getByTestId('form-input')
  const button = screen.getByTestId('add-button')

  fireEvent.change(input, { target: { value: 150 } })
  fireEvent.click(button)

  expect(props.setEntries).toBeCalled()
  expect(props.setEntries).toBeCalledTimes(1)
})
