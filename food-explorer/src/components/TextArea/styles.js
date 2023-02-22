import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`

export const StTextArea = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  resize: none;

  border-radius: 8px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
