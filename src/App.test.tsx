/**
 * @jest-environment jsdom
 */
import { render, fireEvent, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />)
    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Rodz')).toBeInTheDocument()
    expect(getByText('Maykel')).toBeInTheDocument()
  })

  it('should render able to add new items', () => {
    render(<App />)

    fireEvent.click(screen.getByText(/Adicionar/i))

    expect(screen.getByText('Novo')).toBeInTheDocument()
  })
})
