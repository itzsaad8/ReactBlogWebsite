import "./sidebar.css"
import img from '../asset/myself.jpg'
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
const Sidebar = () => {

    const [cats,setcats] = useState([])

    useEffect(()=>{
     const getcats = async ()=>{
        const res = await axios.get('/categories')
        setcats(res.data)
        // console.log(res.data)
     }
     getcats()
    },[])
  return (
    <div className='sidebar'>
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img className="myimg" src={img} alt="" />
            {/* <p className="name"><b>SAAD KHAN</b></p> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae facilis libero ea veritatis dicta commodi sed sapiente perspiciatis dolorem pariatur! Quibusdam sit ab delectus quasi non ipsa earum esse repellendus.</p>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
              {
                cats.map((c)=>(
                  <Link className="link" to={`/?cat=${c.name}`}>
                  <li className="sidebarlistitem">{c.name}</li>
                  </Link>
                ))
              }

            </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
                <i className="sidebaricon fa-brands fa-square-facebook"></i>
                <i className="sidebaricon fa-brands fa-square-twitter"></i>
                <i className="sidebaricon fa-brands fa-square-pinterest"></i>
                <i className="sidebaricon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar