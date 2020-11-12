import React from 'react'
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/fa/search'

import './styles.scss'

type HeaderProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClick: () => void
}

const Header: React.FC<HeaderProps> = ({
  handleChange,
  handleClick,
}: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="header__title">Warehouse</h1>
      <div className="header__search">
        <Icon icon={search} className="header-icon" />
        <input
          className="header-input"
          placeholder="Search name.."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  )
}

export default React.memo(Header)

Header.displayName = 'Header'
