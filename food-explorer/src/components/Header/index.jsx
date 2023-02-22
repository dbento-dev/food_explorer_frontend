import logoSVG from '../../assets/logo.svg'

import { FiLogOut, FiSearch } from 'react-icons/fi'

import { TfiReceipt } from 'react-icons/tfi'

import { Container, ExplorerLogo, Logout } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'

export function Header({ isAdmin = false }) {
  return (
    <>
      <Container>
        <ExplorerLogo>
          <img src={logoSVG} alt="Logo do Explorer Food" />
          <div>
            <span>food explorer</span>
            {isAdmin && <span>admin</span>}
          </div>
        </ExplorerLogo>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />

        <Button
          title={isAdmin ? 'Novo prato' : 'Pedidos (0)'}
          icon={!isAdmin && TfiReceipt}
        />

        <Logout>
          <FiLogOut />
        </Logout>
      </Container>
    </>
  )
}
