import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Content, Banner } from './styles'

import bannerSVG from '../../assets/banner.svg'
import maskGroup3Png from '../../assets/mask-group-3.png'
import { Card } from '../../components/Card'

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
            <div>
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
              />
            </div>
          </Section>
        </Content>
      </main>
    </Container>
  )
}
