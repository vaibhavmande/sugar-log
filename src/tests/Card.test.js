import { screen, render } from '@testing-library/react'
import Card from '../components/blocks/Card/Card'
import { READINGS_COLORS } from '../constants'
import '@testing-library/jest-dom'

const props = {
  date: '11/5/2021',
  time: '15.06.05',
  reading: 213,
  type: 'fasting',
}

describe('Render', () => {
  test('render with props', () => {
    render(<Card {...props} />)
  })

  test('Render props', () => {
    render(<Card {...props} />)
    expect(screen.getByText(props.date)).toBeInTheDocument()
    expect(screen.getByText(props.date)).toHaveStyle('font-size: 1.2rem;')

    expect(screen.getByText(props.time)).toBeInTheDocument()
    expect(screen.getByText(props.time)).toHaveStyle('font-size: 0.8rem;')

    expect(screen.getByText(props.reading)).toBeInTheDocument()
    expect(screen.getByText(props.reading)).toHaveStyle('font-size: 2rem;')

    expect(screen.getByTestId('type')).toHaveTextContent(props.type)
  })
})

describe('Color', () => {
  test('render safe', () => {
    render(<Card {...props} type="PP" reading={140} />)

    expect(screen.getByTestId('status')).toHaveStyle(
      `background-color: ${READINGS_COLORS.safe}`,
    )
  })
  test('render moderate', () => {
    render(<Card {...props} type="PP" reading={180} />)

    expect(screen.getByTestId('status')).toHaveStyle(
      `background-color: ${READINGS_COLORS.moderate}`,
    )
  })
  test('render high', () => {
    render(<Card {...props} type="PP" reading={190} />)

    expect(screen.getByTestId('status')).toHaveStyle(
      `background-color: ${READINGS_COLORS.high}`,
    )
  })
})
