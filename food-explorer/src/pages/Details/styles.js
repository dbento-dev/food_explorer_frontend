import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 104px auto 75px;

  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 30px 0px;
  }

  > footer {
    grid-area: footer;
    display: flex;
  }
`
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: 42px;

  padding: 0 126px;

  > button:first-child {
    align-self: flex-start;
    font-weight: 700;
  }

  > div {
    display: flex;
    gap: 47px;
    align-items: center;

    img {
      width: 390px;
      height: 390px;
    }

    div {
      display: flex;
      gap: 16px;

      flex-direction: column;

      h2 {
        text-align: left;
        font-size: 40px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      p {
        font-size: 24px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      > div:last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;

        margin-top: 40px;

        > svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-size: 24px;

          &:hover {
            cursor: pointer;
          }
        }

        > span {
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > button {
          width: 150px;
        }
      }
    }
  }
`
