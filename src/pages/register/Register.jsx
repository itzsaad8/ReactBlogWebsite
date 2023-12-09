import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import axios from "axios"

const Register = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
      const res = await axios.post('/auth/register',{
        username,
        email,
        password
      });
      res.data && window.location.replace('./login')
      // alert(`${username} "registered" `)
      console.log(res)
      
    } catch (error) {
      console.log(error)
      
    }

   


  }
  return (
    <div className="register">
    <span className="registertitle">
        Register
    </span>
    <form action="" className="registerform" onSubmit={handlesubmit}>
        <label htmlFor="">Username</label>
        <input type="text"
            className="registerinput"
             placeholder="Enter your username"
             onChange={e=>setUsername(e.target.value)}
             />
        <label htmlFor="">Email</label>
        <input type="email"
         className="registerinput"
         placeholder="Enter your email"
         onChange={e=>setEmail(e.target.value)}
         
         />
        <label htmlFor="">Password</label>
        <input type="password"
         className="registerinput"
         placeholder="Enter your password"
         onChange={e=>setPassword(e.target.value)}
          
          />
    <button className="registerbutton" type="submit">Register</button>
    </form>
        <Link className="loginbutton" to='/login'>login</Link>
</div>
  )
}

export default Register