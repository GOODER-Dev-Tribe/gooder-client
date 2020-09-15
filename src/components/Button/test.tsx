import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render a medium button by default', () => {
    const { container } = renderWithTheme(<Button>Continuar</Button>)
    expect(screen.getByRole('button', { name: /Continuar/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem 2.4rem',
      'font-size': '1.2rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 12rem',
      'font-size': '1.6rem'
    })
  })
  it('should render the large variation withBorder', () => {
    renderWithTheme(
      <Button size="large" variation="withBorder">
        Continuar
      </Button>
    )
    expect(screen.getByRole('button', { name: /Continuar/i })).toHaveStyle({
      background: 'none',
      color: '#FF6435',
      border: '0.1rem solid #FF6435'
    })
  })
  it('should render the large variation default', () => {
    renderWithTheme(<Button size="large">Continuar</Button>)
    expect(screen.getByRole('button', { name: /Continuar/i })).toHaveStyle({
      background: '#FF6435',
      color: '#FFF'
    })
  })
})
