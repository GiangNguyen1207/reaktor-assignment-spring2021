import React from 'react'

import './styles.scss'

type ButtonProps = {
  label: string
  handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<ButtonProps> = ({ label, handleClick }: ButtonProps) => {
  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button
Button.displayName = 'Button'
