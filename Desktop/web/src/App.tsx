import React from 'react'

import Routes from './Routes'

import {AuthProvider} from './Context/auth'

import './assets/styles/global.css';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
