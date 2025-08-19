import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Signup from './pages/signup'
function App() {


  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={ <Signup/>} />
          </Routes>
        </Router>
        </div>
    </>
  )
}

export default App
