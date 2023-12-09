import React from 'react'
import Topbar from './top/Topbar'
import Home from './pages/home/Home'
import Single from './pages/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Post from './post/Post'



const App = () => {
  return (
    
    <Router>
      <Topbar/>
       <Routes>
           
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/write" element={<Write/>}></Route>
            <Route path="/post/:id" element={<Single/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            
           
            
            </Routes>
    </Router>
     
      
      
      
    
  )
}

export default App