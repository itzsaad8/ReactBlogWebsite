import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"
import img from '../../asset/myself.jpg'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingupdatetitle">Update your account</span>
          <span className="settingdeletetitle">Delete account</span>
        </div>
        <form className="settingsform">
          <label >Profile picture</label>
          <div className="settingspp">
            <img src={img} alt="" />
            <label htmlFor="fileinput">
              <i className="settingsppicon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label >Username</label>
          <input type="text" placeholder="saad" />
          <label >Email</label>
          <input type="email" placeholder="saad@gmail.com" />
          <label >Password</label>
          <input type="password" />
          <button className="settingssubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings