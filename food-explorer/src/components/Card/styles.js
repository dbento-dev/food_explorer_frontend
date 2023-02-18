import styled from 'styled-components'

export const Container = styled.div`
  width: 304px;
  height: 465px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > div {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 16px;
    align-items: center;

    border-radius: 8px;
    /* border: 1px solid red; */

    position: relative;

    > svg {
      position: absolute;
      top: 24px;
      right: 24px;
      font-size: 24px;

      &:hover {
        cursor: pointer;
      }
    }

    img {
      width: 176px;
      height: 176px;

      border-radius: 50%;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 24px;
      font-weight: 700;
      text-align: center;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 14px;
      font-weight: 400;
      text-align: center;
    }

    span {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 32px;
      font-weight: 400;
      text-align: center;
    }

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 18px;

      > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 24px;

        &:hover {
          cursor: pointer;
        }
      }

      > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      > button {
        width: 92px;
        height: 48px;
      }
    }
  }
`
