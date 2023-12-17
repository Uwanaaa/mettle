import BgVideo from './assets/mixkit-digital-animation-of-screens-4192.mp4'
import './App.css'
import { Video } from './Components/Components'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'

function App() {
  return (
    <>
    <div className='overlay'>
      <div className='bgvideo'>
        <video src={BgVideo} autoPlay loop ></video>
        <div className='video-content'>
          <h1>Mettle</h1>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button id='' className="btn btn-primary me-md-2" type="button"><Link to="/login">Login</Link></button>
              <button className="btn btn-primary ml-10" type="button"><Link to="/signup">Signup</Link></button>
          </div>
        </div>
      </div>
      <Route path="/login" Component={Login}></Route>
      <Route path="/signup" Component={Signup}></Route>
    </div>
    </>
  )
}

export default App
