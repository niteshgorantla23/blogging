import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBlog from './Home/CreateBlog';
import EditBlog from './Home/EditBlog';
import Home from './Home/Home';
import MyBlogs from './Home/MyBlogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Auth/Login';
import SignUp from './Auth/Signup';
import Blog from './Home/Blog';

function App() {
  const [data, setData] = useState()
  
  let store = localStorage.getItem('active')
  useEffect(() => {
 let newStorage = JSON.parse(store)
 setData(newStorage)

  }, [store])
  
  
  return (
<Router>
      <Routes>
        {data != null? 
        <>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/createblog" element={<CreateBlog/>}/>
        <Route exact path="/editblog/:id" element={<EditBlog/>}/>
        <Route exact path="/myblog" element={<MyBlogs/>}/>
        <Route exact path="/blog/:id" element={<Blog/>}/>
        </>
        :
        <>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        </>
        }
      </Routes>
</Router>
  )
}

export default App