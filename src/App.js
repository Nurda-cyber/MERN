import React, { useEffect, useState, useContext } from 'react'
import log from 'loglevel'
import { Button } from 'antd'
import ThemeContext, { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

log.setDefaultLevel('info')
const enableLogging = true

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log('Component is mounting...')
    if (enableLogging) log.info('App component mounted')

    fetch(process.env.REACT_APP_API_URL || 'http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => {
        if (enableLogging) log.info('Backend response:', data)
        setMessage(data)
      })
      .catch((err) => log.error('Error fetching data:', err))

    return () => {
      console.log('Component is unmounting...')
      if (enableLogging) log.info('App component unmounted')
    }
  }, [])

  const clearLogs = () => {
    console.clear()
    console.log('Cleared logs')
  }

  const disableLogging = () => {
    log.disableAll()
    console.log('Logging disabled')
  }

  return (
    <div
      style={{
        padding: '20px',
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h1>Backend Response:</h1>
      <p>{message || 'Loading...'}</p>

      <Button onClick={clearLogs} type="primary" danger>
        Clear Console Logs
      </Button>

      <Button onClick={disableLogging} type="default" style={{ marginLeft: '10px' }}>
        Disable Logging
      </Button>

      <Button onClick={toggleTheme} type="default" style={{ marginLeft: '10px' }}>
        Toggle Theme
      </Button>
    </div>
  )
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
