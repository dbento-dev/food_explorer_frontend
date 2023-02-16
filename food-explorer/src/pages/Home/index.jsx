import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Content, Banner } from './styles'

import bannerSVG from '../../assets/banner.svg'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Banner>
            <img src={bannerSVG} alt="Imagem de frutas e sobremesas" />

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Banner>

          <Section title="Refeições">
            <button>Teste</button>
          </Section>
        </Content>
      </main>
    </Container>
  )
}
