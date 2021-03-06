import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'medium' | 'large'
  variation?: 'default' | 'withBorder'
  hasTooltip?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  variation = 'default',
  hasTooltip = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    variation={variation}
    hasTooltip={hasTooltip}
    {...props}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
