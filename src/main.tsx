import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RemoteConnectPersistance, TonhubConnectProvider } from 'react-ton-x'
import useLocalStorage from 'use-local-storage'
import App from './App'
import './index.css'

let wasPendingConnectionChecked = false

function Application() {
  const [connectionState, setConnectionState] = useLocalStorage<
    RemoteConnectPersistance
  >('connection', {
    type: 'initing',
  })

  // fix for stale connections, can probably be improved
  useEffect(() => {
    if (!wasPendingConnectionChecked && connectionState?.type === 'pending') {
      localStorage.removeItem('connection')
      window.location.reload()
    }
    wasPendingConnectionChecked = true
  }, [connectionState])
  return (
    <TonhubConnectProvider
      network="mainnet"
      url="https://ton.org/"
      name="TON TWA BOT"
      debug={false}
      connectionState={connectionState}
      setConnectionState={(s) => {
        setConnectionState(s as RemoteConnectPersistance)
      }}
    >
      <App />
    </TonhubConnectProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Application />,
)
