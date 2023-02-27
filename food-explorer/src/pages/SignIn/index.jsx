import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Background />
      <Form>
        <div>
          <h1>Faça login</h1>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            placeholder="exemplo@exemplo.com.br"
            type="email"
          />

          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
          />

          <Button title="Entrar" />

          <Link to="/register">Criar uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}
