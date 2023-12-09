import "./singlepost.css"
// import img from '../asset/hd4.avif'
import {useLocation} from "react-router"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
const Singlepost = () => {
    const location = useLocation()

    const path = (location.pathname.split('/')[2])

    const [post , setPost]= useState({})

    useEffect(()=>{
        const fetchedPost = async()=>{
            const res = await axios.get('/posts/' + path)
            setPost(res.data)
            // console.log(res.data)
        }
        fetchedPost()
    },[path])
    return (
        <div className="singlepost">
            <div className="singlepostwrapper">
                {
                    post.photo && 
                <img src={post.photo} alt="" className="singlepostimg" />
                }
                <h1 className="singleposttitle">{post.title}
                <div className="singlepostedit">
                    <i className=" singleposticon fa-regular fa-pen-to-square"></i>
                    <i className="singleposticon fa-solid fa-trash"></i>
                </div>
                </h1>
                <div className="singlepostinfo">
                    <span className="singlepostauthor">Author: <Link className="link" to={`/?user=${post.username}`}> <b>{post.username}</b></Link></span>
                    <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlepostdesc">{post.desc}</p>
            </div>
        </div>
    )
}

export default Singlepost