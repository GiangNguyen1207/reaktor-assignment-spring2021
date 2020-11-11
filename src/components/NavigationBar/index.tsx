import React from 'react'
import { NavLink } from 'react-router-dom'

import Categories from 'constants/Categories'
import './styles.scss'

const NavigationBar: React.FC = () => {
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
            >
              {cat}
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

export default NavigationBar

NavigationBar.displayName = 'NavigationBar'
