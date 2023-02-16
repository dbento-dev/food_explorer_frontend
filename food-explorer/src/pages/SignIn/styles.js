import styled from 'styled-components'

import foodExplorerLogoSVG from '../../assets/food-explorer-logo.svg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Background = styled.div`
  flex: 1;
  background: url(${foodExplorerLogoSVG}) no-repeat center center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 120px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 540px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 64px;

    border-radius: 16px;

    > h1 {
      font-size: 32px;
      font-weight: 500;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      align-self: center;
    }

    > label {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-top: 32px;
      margin-bottom: 8px;
    }

    /* > div {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    } */

    > button {
      margin-top: 32px;
    }

    > a {
      margin-top: 32px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      align-self: center;
    }
  }
`
