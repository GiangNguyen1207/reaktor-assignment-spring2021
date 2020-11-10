import React, { useState } from 'react'

import TimeInput from 'components/TimeInput'
import Button from 'components/Button'
import './styles.scss'

const TimeUpdate = () => {
  const [period, setPeriod] = useState<number>()

  if (period) {
    setTimeout(() => {
      location.reload()
    }, period * 60000)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(Number(event.target.value))
  }

  const handleUpdateClick = () => {
    location.reload()
  }

  return (
    <div className="time">
      <TimeInput handleChange={handleChange} />
      <Button label="Update now" handleClick={handleUpdateClick} />
    </div>
  )
}

export default TimeUpdate
TimeUpdate.displayName = 'TimeUpdate'
