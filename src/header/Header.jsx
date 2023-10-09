import './header.css'
import img from '../asset/hd6.avif'
const Header = () => {
  return (
    <div className='header'>
      <div className="headertitles">
        <span className='headertitlesm'>React & Node</span>
        <span className='headertitlelg'>Blog</span>
        </div>
        <img className='headerimg'  src={img} alt="" />
        </div>
  )
}

export default Header