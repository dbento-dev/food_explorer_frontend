import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Slider } from '../../components/Slider'
import { Container, Content, Banner } from './styles'

import bannerSVG from '../../assets/banner.svg'

import maskGroup from '../../assets/mask-group.png'
import maskGroup1Png from '../../assets/mask-group-1.png'
import maskGroup3Png from '../../assets/mask-group-3.png'

import sobremesa1Png from '../../assets/sobremesa1.png'
import sobremesa2Png from '../../assets/sobremesa2.png'
import sobremesa3Png from '../../assets/sobremesa3.png'

import bebida1Png from '../../assets/bebida1.png'
import bebida2Png from '../../assets/bebida2.png'
import bebida3Png from '../../assets/bebida3.png'

import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <Container>
      <Header isAdmin />

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
            <Slider>
              <Card
                logo={maskGroup}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
                isAdmin
              />
              <Card
                logo={maskGroup1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={maskGroup3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
            </Slider>
          </Section>
          <Section title="Sobremesas">
            <Slider>
              <Card
                logo={sobremesa1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={sobremesa3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
            </Slider>
          </Section>
          <Section title="Bebidas">
            <Slider>
              <Card
                logo={bebida1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida1Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida2Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
              <Card
                logo={bebida3Png}
                title="Spaguetti Gambe "
                description="Massa fresca com camarões e pesto."
                price="R$ 29,90"
                className="item"
              />
            </Slider>
          </Section>
        </Content>
        <Footer />
      </main>
    </Container>
  )
}
