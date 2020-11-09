import React from 'react'

import './styles.scss'

type TimeInputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TimeInput: React.FC<TimeInputProps> = ({ handleChange }) => {
  return (
    <>
      <span>Update after</span>
      <input className="time-input" onChange={handleChange}></input>
      <span>minute(s)</span>
    </>
  )
}

export default TimeInput
TimeInput.displayName = 'TimeInput'
