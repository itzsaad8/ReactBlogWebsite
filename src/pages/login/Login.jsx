import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
        <span className="logintitle">
            Login
        </span>
        <form action="" className="loginform">
            <label htmlFor="">Email</label>
            <input type="email" className="logininput" placeholder="Enter your email" />
            <label htmlFor="">Password</label>
            <input type="password" className="logininput" placeholder="Enter your password" />
            <button className="loginbutton1">Login</button>
        </form>
        <Link className="loginregbutton1"  to='/register'>register</Link>
        
    </div>
  )
  // loginregbutton1
  // loginbutton1
}

export default Login