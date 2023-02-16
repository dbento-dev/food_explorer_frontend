import { FiHeart } from 'react-icons/fi'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { RiPencilLine } from 'react-icons/ri'
import { Button } from '../Button'
import { Container } from './styles'

export function Card({ logo, title, description, price, ...rest }) {
  return (
    <>
      <Container {...rest}>
        <div>
          <FiHeart />
          {/* <RiPencilLine /> */}
          <img src={logo} alt="Imagem do prato" />
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{price}</span>

          <div>
            <RxMinus />
            <span>01</span>
            <RxPlus />

            <Button title="Incluir" />
          </div>
        </div>
      </Container>
    </>
  )
}
