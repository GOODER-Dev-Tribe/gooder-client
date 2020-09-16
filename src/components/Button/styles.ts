import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'hasTooltip' | 'variation'>

const WrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,
  large: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
  `,
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
  withBorder: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.gray};
    border: 0.1rem solid ${theme.colors.primary};
    font-weight: 500;
  `,
  widthIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border-radius: 100%;
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  withTootip: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
    outline: none;
    position: relative;
    ::after {
      content: '2';
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-color: ${theme.colors.secondary};
      position: absolute;
      right: -10px;
      top: -15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600px;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, hasTooltip, variation }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    outline: none;
    position: relative;
    cursor: pointer;
    ${!!size && WrapperModifiers[size](theme)};
    ${!!variation && WrapperModifiers[variation](theme)};
    ${!!hasTooltip && WrapperModifiers.withTootip(theme)};
  `}
`
