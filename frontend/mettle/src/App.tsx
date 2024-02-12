import './App.css'
//import ReactDOM  from 'react-dom/client'
//import { Video } from './Components/Components'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import  Login  from './Components/Login'
import  Signup  from './Components/Signup'
import  Home  from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'
import WatchPage from './Components/WatchPage'
import Test from './Components/test';
import Upload from './Components/Upload'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/watch' element={<WatchPage/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/upload' element={<Upload/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
