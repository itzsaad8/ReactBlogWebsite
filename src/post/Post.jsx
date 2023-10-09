import "./post.css"
import img from '../asset/hd5.avif'
import { Link } from "react-router-dom"
const Post = () => {
  return (
    <div className="post">
        <img className="postimg" src={img} alt="" />
         <div className="postinfo">
            <div className="postcats">
                <span className="postcat">Life</span>
                <span className="postcat">Music</span>
            </div>
             <Link className="posttitle" to='/post'>Lorem ipsum dolor sit amet.</Link>
            <hr/>
            <span className="postdate">2 hour ago</span>
         </div>
         <p className="postdesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, asperiores molestiae. A soluta eligendi, magnam at quasi quidem praesentium, tempore rerum asperiores optio alias. Quasi, voluptatem delectus? Impedit, consectetur reprehenderit.asperiores molestiae. A soluta eligendi, magnam at quasi quidem praesentium, tempore rerum asperiores optio alias. Quasi, voluptatem delectus? Impedit, consectetur reprehenderit.asperiores molestiae. A soluta eligendi, magnam at quasi quidem praesentium, tempore rerum asperiores optio alias. Quasi, voluptatem delectus? Impedit, consectetur reprehenderit.</p>
    </div>
  )
}

export default Post