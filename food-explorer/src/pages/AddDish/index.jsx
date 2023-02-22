import { RxCaretLeft } from 'react-icons/rx'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'

export function AddDish() {
  const isAdmin = true
  return (
    <Container>
      <Header isAdmin={isAdmin} />

      <main>
        <Content>
          <ButtonText title="voltar" icon={RxCaretLeft} />
          <h2>Adicionar prato</h2>

          <Form>
            <div>
              <label htmlFor="dish-photo">Imagem do prato</label>
              <Input
                name="dish-photo"
                placeholder="Selecione imagem"
                type="text"
              />
              <label htmlFor="name">Nome</label>
              <Input name="name" placeholder="Ex.: Salada Ceasar" type="text" />
              <label htmlFor="category">Categoria</label>
              <Input name="category" placeholder="Selecione" type="text" />
            </div>
            <div>
              <label htmlFor="ingredients">Ingredientes</label>
              <Input name="ingredients" type="text" />
              <label htmlFor="price">Preço</label>
              <Input name="price" placeholder="R$ 00,00" type="text" />
            </div>

            <div>
              <TextArea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                label="Descrição"
              />
            </div>

            <div>
              <Button title="Adicionar prato" />
            </div>
          </Form>
        </Content>
        <Footer />
      </main>
    </Container>
  )
}
