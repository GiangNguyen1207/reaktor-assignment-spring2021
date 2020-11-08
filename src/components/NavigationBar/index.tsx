import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getProducts } from 'redux/actions'
import './styles.scss'

const NavigationBar: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const categories = ['jackets', 'shirts', 'accessories']

  const handleClick = (category: string) => {
    history.push(`/${category}`)
    dispatch(getProducts(category))
  }

  return (
    <div className="navigation">
      <ul className="nav-list">
        {categories.map((cat: string) => {
          return (
            <li
              className="nav-list__item"
              key={cat}
              onClick={() => handleClick(cat)}
            >
              {cat}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavigationBar

NavigationBar.displayName = 'NavigationBar'
