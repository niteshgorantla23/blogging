import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import './style.css'
import { useNavigate } from 'react-router-dom';
function Head(props) {
const navi = useNavigate()
    const navigate  = (value) => {
      return(

        navi(value)
      )
    }
    const logout = () => {
      localStorage.removeItem("active"); 
      navi("/")
      window.location.reload()
    }
  return (
    <Navbar className='ava_header' expand="lg" >
    <Container className='paadding0'>
    <Navbar.Brand onClick={() => navigate("/")} style={{color:"white"}}>
       Rubric
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
  
        <Nav.Link onClick={() => navigate("/createblog")} className={props.active == 'project' ?'header_link_text_clicked' : 'header_link_text'}>
          Create Blog
        </Nav.Link>
        <Nav.Link onClick={() => navigate("/myblog")} style={{ display: 'initial'}} className={props.active == 'staking' ?'header_link_text_clicked' : 'header_link_text'}>
          My Blogs
        </Nav.Link>

      <Nav.Link style={{ display: 'initial'}} >
      <Button variant="outline-dark" onClick={() => logout()}>Logout</Button></Nav.Link>
      
     </Navbar.Collapse>
    </Container>
    
  </Navbar>
  )
}


export default Head