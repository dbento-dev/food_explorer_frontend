import { RxCaretLeft } from 'react-icons/rx'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { IngredientsItem } from '../../components/IngredientsItem'

export function AddDish() {
  const isAdmin = true
  return (
    <Container>
      <Header isAdmin={isAdmin} />

      <main>
        <Content>
          <ButtonText title="voltar" icon={RxCaretLeft} to="/" />
          <h2>Adicionar prato</h2>

          <Form>
            <div className="row">
              <div className="form-group dish-photo">
                <label htmlFor="dish-photo">Imagem do prato</label>
                <Input
                  name="dish-photo"
                  placeholder="Selecione imagem"
                  type="text"
                />
              </div>
              <div className="form-group name">
                <label htmlFor="name">Nome</label>
                <Input
                  name="name"
                  placeholder="Ex.: Salada Ceasar"
                  type="text"
                />
              </div>
              <div className="form-group category">
                <label htmlFor="category">Categoria</label>
                <Input name="category" placeholder="Selecione" type="text" />
              </div>
            </div>

            <div className="row">
              <div className="form-group ingredients-list">
                <div className="ingredients-list">
                  <span>Ingredientes</span>
                  <div className="ingredients">
                    <IngredientsItem value="Faria de trigo" />
                    <IngredientsItem value="Faria de trigo" />

                    <IngredientsItem isNew placeholder="Adicionar" />
                  </div>
                </div>
              </div>

              <div className="form-group price">
                <label htmlFor="price">Preço</label>
                <Input name="price" placeholder="R$ 00,00" type="text" />
              </div>
            </div>

            <div className="row">
              <div className="form-group description">
                <TextArea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  label="Descrição"
                />
              </div>
            </div>

            <Button title="Adicionar prato" />
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
