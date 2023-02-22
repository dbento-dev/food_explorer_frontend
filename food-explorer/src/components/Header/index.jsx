import logoSVG from '../../assets/logo.svg'

import { FiLogOut, FiSearch } from 'react-icons/fi'

import { TfiReceipt } from 'react-icons/tfi'

import { Container, ExplorerLogo, Logout } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'

export function Header({ isAdmin }) {
  return (
    <>
      <Container>
        <ExplorerLogo>
          <img src={logoSVG} alt="Logo do Explorer Food" />
          <div>
            <span>food explorer</span>
            <span>admin</span>
          </div>
        </ExplorerLogo>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />

        <Button title="Pedidos (0)" icon={TfiReceipt} />

        <Logout>
          <FiLogOut />
        </Logout>
      </Container>
    </>
  )
}
