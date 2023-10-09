import React from 'react'
// import img from '../asset/img1.jpg'
import './topbar.css'
import { Link } from 'react-router-dom'
const Topbar = () => {
    return (<>
        <div className="top">
            <div className='topLeft'>
                <i className="topicon fa-brands fa-square-facebook"></i>
                <i className="topicon fa-brands fa-square-twitter"></i>
                <i className="topicon fa-brands fa-square-pinterest"></i>
                <i className="topicon fa-brands fa-square-instagram"></i></div>
            <div className='topCenter'>

                <ul className='topList'>
                    <li className='topListitem'><Link className='link' to="/">HOME</Link></li>
                    <li className='topListitem'><Link className='link' to="/post">POST</Link></li>
                   
                    <li className='topListitem'><Link className='link' to="write">WRITE</Link></li>
                    <li className='topListitem'><Link className='link' to="settings">SETTING</Link></li>
                    
                </ul>

            </div>
            <div className='topRight'>
                {/* <img className='topimg' src={img} alt="" /> */}
                    <Link className='link topListitem' to="register">REGISTER</Link>
                    <Link className='link topListitem' to="login">LOGIN</Link>
                <i className="topiconsearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </>
    )
}

export default Topbar