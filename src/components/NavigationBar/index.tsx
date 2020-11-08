import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'

const NavigationBar: React.FC = () => {
  const history = useHistory()
  const categories = ['jackets', 'shirts', 'accessories']

  const handleClick = (category: string) => {
    history.push(`/${category}`)
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
