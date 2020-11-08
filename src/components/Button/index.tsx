import React from 'react'

type ButtonProps = {
  label: string
  handleClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>{label}</button>
}

export default Button

Button.displayName = 'Button'
