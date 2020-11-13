import React from 'react'
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/fa/search'

import './styles.scss'

type HeaderProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClick: (event: React.FormEvent<HTMLFormElement>) => void
  input: string
}

const Header: React.FC<HeaderProps> = ({
  handleChange,
  handleClick,
  input,
}: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="header__title">Warehouse</h1>
      <div className="header__search">
        <Icon icon={search} className="header-icon" />
        <form onSubmit={handleClick} className="header-form">
          <input
            value={input}
            className="header-input"
            placeholder="Search name.."
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Header)

Header.displayName = 'Header'
