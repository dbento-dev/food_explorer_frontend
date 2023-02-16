import styled from 'styled-components'
import bannerSVG from '../../assets/banner.svg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 114px auto;

  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 24px 0px;
  }
`

export const Content = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding: 0 126px;
`

export const Banner = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  position: relative;

  > img {
    width: 650px;
    height: 400px;

    position: absolute;
    left: -100px;
  }

  > div {
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;

    border-radius: 8px;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    margin-top: 141px;
    align-items: flex-end;
    justify-content: center;
    padding-right: 100px;

    h1 {
      font-size: 40px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: 'Roboto', sans-serif;
    }
  }
`
