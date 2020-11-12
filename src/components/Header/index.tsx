import React from 'react'
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/fa/search'

import './styles.scss'

type HeaderProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Header: React.FC<HeaderProps> = ({ handleChange }: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="header__title">Warehouse</h1>
      <Icon icon={search} className="header__icon" />
      <input
        className="header__input"
        placeholder="Search name.."
        onChange={handleChange}
      />
    </div>
  )
}

export default React.memo(Header)

Header.displayName = 'Header'
