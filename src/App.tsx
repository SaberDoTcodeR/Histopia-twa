import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './Pages/Login/Login'
import { useTonhubConnect } from 'react-ton-x'

const queryClient = new QueryClient()

function App() {

  const connect = useTonhubConnect()
  const isConnected = connect.state.type === 'online'

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!isConnected && <Login />}
      </div>
    </QueryClientProvider>
  )
}

export default App
