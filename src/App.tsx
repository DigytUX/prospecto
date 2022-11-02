
import {useContext} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from '../src/pages/index'
import Home from '../src/pages/Home'
import {ProtectedRoute} from './components/ProtectedRoute'
import {Dashboard} from './components/Dashboard/Dashboard'
import { AuthContextProvider } from './context/AuthContext'

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
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route 
          path='/dashboard' 
          element={ 
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Routes>
    </AuthContextProvider>
  )
}

export default App