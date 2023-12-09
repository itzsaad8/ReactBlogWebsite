import "./post.css"
import img from '../asset/hd5.avif'
import { Link } from "react-router-dom"
const Post = ({post}) => {
  return (
    <div className="post">
      {
        post.photo && 
        <img className="postimg" src={post.photo} alt="" />
      }
         <div className="postinfo">
            <div className="postcats">
                {
                  post.categories.map((c)=>{
                    return <span className="postcat">{c}</span>
                  })
                }
               
            </div>
             <Link className="posttitle" to={`/post/${post._id}`}>{post.title}</Link>
            <hr/>
            <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
         </div>
         <p className="postdesc">{post.desc}</p>


    </div>
    
  )
}

export default Post