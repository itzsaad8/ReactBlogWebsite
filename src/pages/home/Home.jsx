import { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import './home.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts,setPosts]= useState([])
  const {search} = useLocation()
  // console.log(location)

  useEffect(()=>{

    const fetchedPosts = async()=>{
     const res = await axios.get('/posts' + search)
     setPosts(res.data)
    //  console.log(res.data)
    }
    fetchedPosts()

  },[search])
  return (
    <>
    <Header/>
    <div className='home'>
         <Posts posts={posts}/>
         <Sidebar/>
        
    </div>
    </>
  )
}

export default Home