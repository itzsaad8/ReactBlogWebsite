import "./sidebar.css"
import img from '../asset/myself.jpg'
const Sidebar = () => {
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
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                <li className="sidebarlistitem">Style</li>
                <li className="sidebarlistitem">Cinema</li>
                <li className="sidebarlistitem">Sport</li>
                <li className="sidebarlistitem">Tech</li>
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