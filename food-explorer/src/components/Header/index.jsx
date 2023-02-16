import logoSVG from '../../assets/logo.svg'

import { FiLogOut, FiSearch } from 'react-icons/fi'

import { Container, ExplorerLogo, Logout } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'

export function Header() {
  return (
    <>
      <Container>
        <ExplorerLogo>
          <img src={logoSVG} alt="Logo do Explorer Food" />
          <span>food explorer</span>
        </ExplorerLogo>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
        {/* <Button title="Pedidos" /> */}

        <Logout>
          <FiLogOut />
        </Logout>
      </Container>
    </>
  )
}
