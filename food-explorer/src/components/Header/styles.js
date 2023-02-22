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

  > div:first-child {
    width: 250px;
  }

  > div:nth-child(2) {
    width: calc(100% - 250px);
  }

  > button:nth-child(3) {
    width: 200px;
  }

  > button:last-child {
    width: 40px;
  }
`
export const ExplorerLogo = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;

  justify-content: center;

  > img {
    width: 30px;
    height: 30px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span:first-child {
      font-size: 24px;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > span:nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      text-align: end;
    }
  }
`

export const Logout = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  > svg {
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
