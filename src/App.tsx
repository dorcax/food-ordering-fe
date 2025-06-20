import React from 'react'
import AppRoutes from './routes/AppRoutes'
import ModalProvider from './context/ModalProvider'

const App = () => {
  // 88, 148, 3)
  return (
    <ModalProvider>
      <AppRoutes/>
    </ModalProvider>
  )
}

export default App