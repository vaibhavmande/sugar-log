import { screen, render, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import AddEntry from '../components/blocks/AddEntry/AddEntry'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import '@testing-library/jest-dom/vitest'

const props = {
  entries: [],
  open: true,
  setEntries: vi.fn(),
  type: 'fasting',
  setOpen: vi.fn(),
}

const wrapper = ({ children }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    {children}
  </LocalizationProvider>
)

describe('Render', () => {
  test('render', () => {
    render(<AddEntry {...props} />, { wrapper })
  })
  test('hide', () => {
    render(<AddEntry {...props} open={false} />, { wrapper })
    expect(screen.queryByTestId('add-form-parent')).not.toBeInTheDocument()
  })
})

describe('Props', () => {
  test('Should display type', () => {
    render(<AddEntry {...props} />, { wrapper })
    expect(screen.getByText("Add today's fasting entry")).toBeTruthy()
  })
  test('Button should be disabled', () => {
    render(<AddEntry {...props} />, { wrapper })
    const input = screen.getByTestId('form-input')
    const button = screen.getByTestId('add-button')

    fireEvent.change(input, { target: { value: 1000 } })
    expect(button).toBeDisabled()

    fireEvent.change(input, { target: { value: 150 } })
    expect(button).not.toBeDisabled()
  })
})

describe('update entry object', () => {
  test('should call setEntries on submit', () => {
    render(<AddEntry {...props} />, { wrapper })
    const input = screen.getByTestId('form-input')
    const button = screen.getByTestId('add-button')

    fireEvent.change(input, { target: { value: 150 } })
    fireEvent.click(button)

    expect(props.setEntries).toBeCalled()
    expect(props.setEntries).toBeCalledTimes(1)
  })
})
