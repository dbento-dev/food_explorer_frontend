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

  > .row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 32px;

    > .dish-photo {
      width: 15%;
    }

    > .name {
      width: 50%;
    }

    > .category {
      width: 35%;
    }

    > .ingredients-list {
      width: 80%;
    }

    > .price {
      width: 20%;
    }

    > .description {
      width: 100%;
    }
  }

  > .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    > label {
      margin-bottom: 5px;
    }

    > input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      width: 100%;
      max-width: 400px;
    }
  }

  .ingredients-list {
    display: flex;
    flex-direction: column;
  }

  .ingredients {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: 8px;
    border-radius: 5px;

    padding: 12px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  > button {
    width: 175px;
    align-self: flex-end;
  }
`
