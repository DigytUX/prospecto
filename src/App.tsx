
import {useContext} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from '../src/pages/index'
import Home from '../src/pages/Home'
import { AuthContext } from './context/AuthContext'
import {AuthProvider} from '../src/provider/AuthProvider'
import {RouterGuard} from './components/RouterGuard'
import {Dashboard} from './components/Dashboard/Dashboard'

function App() {
  const styles = {
    Container: {
      height:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center'
    },
    Title:{
      fontWeight:700
    },
    FlexBox:{
      display:'flex',
      flexDirection:'column',
      gap:2,
      padding:5
    }
  }
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route 
          path='/dashboard' 
          element={
          <RouterGuard>
            <Dashboard />
          </RouterGuard>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App