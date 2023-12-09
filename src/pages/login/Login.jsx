import { useContext, useRef } from "react"
import "./login.css"
import { Link } from "react-router-dom"
import { context } from "../../context/Context"
import axios from "axios"

const Login = () => {



  const userRef = useRef()
  const passwordRef = useRef()
  const {user,dispatch,isFetching} = useContext(context)


  const handlesubmit = async(e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res =  await axios.post('/auth/login',{
        username:userRef.current.value,
        password:passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    } catch (error) {
      
      dispatch({type:"LOGIN_FAILURE"})
   }
  };
  console.log(user)
  return (
    <div className="login">
        <span className="logintitle">
            Login
        </span>
        <form action="" className="loginform" onSubmit={handlesubmit}>
            <label htmlFor="">Username</label>
            <input type="text" className="logininput" placeholder="Enter your username"
            Ref={userRef} />
            <label htmlFor="">Password</label>
            <input type="password" className="logininput" placeholder="Enter your password" 
            Ref={passwordRef}/>
            <button className="loginbutton1">Login</button>
        </form>
        <Link className="loginregbutton1"  to='/register'>register</Link>
        
    </div>
  )
  // loginregbutton1
  // loginbutton1
}

export default Login