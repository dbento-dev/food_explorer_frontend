import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 104px auto;

  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 30px 0px 0px;
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

  padding: 0 126px;

  > button {
    align-self: flex-start;
  }

  > h2 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-top: 24px;
  }
`

export const Form = styled.form`
  width: 100%;
  margin: 38px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
