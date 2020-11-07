import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getProducts } from 'redux/actions'
import './styles.scss'

const NavigationBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const categories = ['jackets', 'shirts', 'accessories']

  const handleClick = (category: string) => {
    if (category === 'jackets') {
      history.push('/')
    } else history.push(`/${category}`)
    dispatch(getProducts(category))
  }

  return (
    <div className="navigation">
      <ul className="nav-list">
        {categories.map((cat) => {
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
