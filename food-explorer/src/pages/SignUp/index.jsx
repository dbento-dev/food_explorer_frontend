import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <div>
          <h1>Crie sua conta</h1>

          <label htmlFor="name">Seu nome</label>
          <Input
            name="name"
            placeholder="Exemplo: Maria da Siva"
            type="email"
          />

          <label htmlFor="email">Email</label>
          <Input
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
          />

          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
          />

          <Button title="Criar conta" />

          <a href="#">Já tenho uma conta</a>
        </div>
      </Form>
    </Container>
  )
}
