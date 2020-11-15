import React from 'react'
import { NavLink } from 'react-router-dom'

import Categories from 'constants/Categories'
import './styles.scss'

type NavigationBarProps = {
  //handleRemoveSearchClick: () => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({}: //handleRemoveSearchClick,
NavigationBarProps) => {
  const { pJackets, pShirts, pAccessories } = Categories
  const categories = [pJackets, pShirts, pAccessories]

  return (
    <div className="navigation">
      <ul className="nav-list">
        {categories.map((cat: string) => {
          return (
            <NavLink
              exact
              to={`/${cat}`}
              className="nav-list__item"
              activeClassName="selected"
              key={cat}
              //onClick={handleRemoveSearchClick}
            >
              {cat}
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

export default React.memo(NavigationBar)

NavigationBar.displayName = 'NavigationBar'
