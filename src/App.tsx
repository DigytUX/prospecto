
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from '../src/pages/index'
import Home from '../src/pages/Home'

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
  <Router>
    <Routes>
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/' element={<Home />} />
    </Routes> 
  </Router>
  )
}

export default App