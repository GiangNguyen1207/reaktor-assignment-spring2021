import React from 'react'

import './styles.scss'

type NotiProps = {
  toggleNoti: boolean
  message: string | null
}
const Notification: React.FC<NotiProps> = ({
  toggleNoti,
  message,
}: NotiProps) => {
  return (
    <div className={`noti noti-${toggleNoti ? 'show' : ''}`}>{message}</div>
  )
}

export default Notification

Notification.displayName = 'Notification'
