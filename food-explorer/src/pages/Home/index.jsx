import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Content, Banner, Slider } from './styles'

import bannerSVG from '../../assets/banner.svg'

import maskGroup from '../../assets/mask-group.png'
import maskGroup1Png from '../../assets/mask-group-1.png'
import maskGroup3Png from '../../assets/mask-group-3.png'

import { Card } from '../../components/Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

export function Home() {
  const slider = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()

    if (!Math.abs(slider.current.scrollLeft) < 1) {
      slider.current.scrollLeft -= slider.current.offsetWidth
    }
  }

  function handleRightClick(e) {
    e.preventDefault()

    if (
      Math.abs(
        slider.current.scrollLeft +
          slider.current.offsetWidth -
          slider.current.scrollWidth
      ) > 1
    ) {
      slider.current.scrollLeft += slider.current.offsetWidth
    }
  }

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
            <Slider className="container">
              <button className="btn-left control" onClick={handleLeftClick}>
                <FiChevronLeft size={50} />
              </button>
              <button className="btn-right control" onClick={handleRightClick}>
                <FiChevronRight size={50} />
              </button>
              <div className="carousel" ref={slider}>
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
              </div>
            </Slider>
          </Section>
        </Content>
      </main>
    </Container>
  )
}
