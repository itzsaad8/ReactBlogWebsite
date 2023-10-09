import { Link } from "react-router-dom"
import "./register.css"

const Register = () => {
  return (
    <div className="register">
    <span className="registertitle">
        Register
    </span>
    <form action="" className="registerform">
        <label htmlFor="">Username</label>
        <input type="email" className="registerinput" placeholder="Enter your username" />
        <label htmlFor="">Email</label>
        <input type="email" className="registerinput" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="password" className="registerinput" placeholder="Enter your password" />
    <button className="registerbutton">Register</button>
    </form>
        <Link className="loginbutton" to='/login'>login</Link>
</div>
  )
}

export default Register