import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './Pages/Login/Login'
import { useTonhubConnect } from 'react-ton-x'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const queryClient = new QueryClient()

function App() {
  const navigate = useNavigate()
  const connect = useTonhubConnect()
  const isConnected = connect.state.type === 'online'

  useEffect(() => {
    if (!isConnected) {
      navigate('/')
    }
  }, [isConnected])

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/test"
          element={
            <button
              onClick={() => {
                localStorage.removeItem('connection')
                window.location.reload()
              }}
            >
              Disconnect
            </button>
          }
        />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
