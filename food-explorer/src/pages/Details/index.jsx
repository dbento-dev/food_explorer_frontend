import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Container, Content } from './styles'
import MaskGroupPNG from '../../assets/mask-group.png'
import { RxCaretLeft, RxPlus, RxMinus } from 'react-icons/rx'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="voltar" icon={RxCaretLeft} />

          <div>
            <div>
              <img src={MaskGroupPNG} alt="Imagem do prato selecionado" />
            </div>

            <div>
              <h2>Salada Ravanello</h2>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim. O pão naan dá um toque especial.
              </p>
              <div>
                <Tag title="alface" />
                <Tag title="queijo" />
                <Tag title="cebola" />
                <Tag title="pepino" />
              </div>
              <div>
                <RxMinus />
                <span>01</span>
                <RxPlus />

                <Button title="incluir ∙ R$ 25,00" />
              </div>
            </div>
          </div>
        </Content>
      </main>
    </Container>
  )
}
