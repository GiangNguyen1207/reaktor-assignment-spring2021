import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Routes from 'Routes'
import Header from 'components/Header'
import NavigationBar from 'components/NavigationBar'
import Notification from 'components/Notification'
import { RootState } from 'redux/reducer'
import { hideNotification } from 'redux/actions'
import 'App.css'

function App() {
  const dispatch = useDispatch()
  const message = useSelector((state: RootState) => state.product.notification)

  setTimeout(() => {
    dispatch(hideNotification())
  }, 3000)

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
