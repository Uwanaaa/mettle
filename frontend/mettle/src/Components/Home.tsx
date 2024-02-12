import BgVideo from '../assets/mixkit-digital-animation-of-screens-4192.mp4'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Home(){
    return(
        <>
        <div className='overlay'>
          <div className='bgvideo'>
            <video src={BgVideo} autoPlay loop ></video>
            <div className='video-content'>
              <h1>MeTube</h1>
              <div className="d-grid gap-2 d-md-block">
               <Link to='/login'><button className="btn btn-primary" type="button">Login</button></Link>
               <Link to='/signup'><button className="btn btn-primary" type="button">Signup</button></Link>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}


