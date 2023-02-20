import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 126px;
  height: 75px;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    gap: 10px;
    align-items: center;

    > img {
      width: 30px;
      height: 30px;
    }

    > span {
      font-size: 24px;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`
