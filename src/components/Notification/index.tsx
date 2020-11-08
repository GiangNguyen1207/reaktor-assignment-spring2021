import React from 'react'

type NotiProps = {
  message: string | null
}
const Notification: React.FC<NotiProps> = ({ message }: NotiProps) => {
  return <div>{message}</div>
}

export default Notification

Notification.displayName = 'Notification'
