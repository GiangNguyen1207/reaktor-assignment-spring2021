import React from 'react'
import { useSelector } from 'react-redux'

import Routes from 'Routes'
import Header from 'components/Header'
import NavigationBar from 'components/NavigationBar'
import Notification from 'components/Notification'
import { RootState } from 'redux/reducer'
import 'App.css'

function App() {
  const message = useSelector((state: RootState) => state.product.notification)
  return (
    <>
      <Header />
      <NavigationBar />
      <Notification toggleNoti={message ? true : false} message={message} />
      <Routes />
    </>
  )
}

export default App
