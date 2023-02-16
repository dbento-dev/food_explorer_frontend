import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 104px;

  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 0 126px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`
export const ExplorerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 30px;
    height: 30px;
  }

  > span {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
