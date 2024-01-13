import './App.css'
//import ReactDOM  from 'react-dom/client'
//import { Video } from './Components/Components'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import  Login  from './Components/Login'
import  Signup  from './Components/Signup'
import  Home  from './Components/Home'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
