import React from 'react'

import TimeUpdate from 'components/TimeUpdate'
import './styles.scss'

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="header__title">Warehouse</h1>
      <TimeUpdate />
    </div>
  )
}

export default Header

Header.displayName = 'Header'
