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

  /* > section {
    > div {
      width: 100%;
      display: flex;
      gap: 27px;

      overflow-x: auto;
      overflow-y: hidden;
    }
  } */
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

export const Slider = styled.div`
  position: relative;

  > .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    gap: 27px;

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      flex: none;
    }
  }

  > .btn-left,
  .btn-right {
    position: absolute;
    z-index: 5;

    top: 0;
    left: 0;
    right: auto;
    bottom: 0;

    background-color: transparent;
    border: none;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: linear-gradient(to left, transparent 0%, black 200%);
    opacity: 0.1;
    transition: all 500ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  > .btn-right {
    left: auto;
    right: 0;

    background: linear-gradient(to right, transparent 0%, black 200%);
  }
`
