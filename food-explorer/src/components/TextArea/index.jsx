import { Container, StTextArea } from './styles'

export function TextArea({ value, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={label}>{label}</label>}

      <StTextArea {...rest}>{value}</StTextArea>
    </Container>
  )
}
