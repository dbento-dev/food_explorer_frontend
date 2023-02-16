import styled from 'styled-components'

export const Container = styled.section`
  margin: 56px 0 28px;

  > h2 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 16px;
  }
`
