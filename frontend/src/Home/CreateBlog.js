import React,{useState,useEffect} from 'react'
import Head from './Head'
import './style.css'
import { Link , useNavigate } from 'react-router-dom'
import { Form , Container, Button} from 'react-bootstrap'
import axios from 'axios'

function CreateBlog() {
  const [blog,setBlog] = useState([])
  const [first,setFirst] = useState()
  const [last,setLast] = useState()
  const [e_mail,setEmail] = useState()
  const [storageValue,setStorageValue] = useState()
  const navi = useNavigate()

  React.useEffect(() => {
    let store = localStorage.getItem('active')
    let newStorage = JSON.parse(store)
    setStorageValue(newStorage)

  }, [])
  useEffect(() => {
      fetch("/api/v1/blogs").then(res => {
          if(res.ok) {
              return res.json()
          }
      }).then(jsonRes => setBlog(jsonRes))
  },[])


  const postFunction = () => {

if(first && last && e_mail ) {

    axios.post('/api/v1/blogs', {
      user_name: storageValue.name,
      title: first,
        auther: last,
        article: e_mail
      })
      .then((response) => {
        console.log(">>",response);
        navi("/")
      }, (error) => {
        console.log("<<",error);
      });

  
  }else{
    alert("All field must be filled")
  }

}
  return (
    <div><Head/>
    <Container>
    <h1 className='ct black'>Create Blog</h1>
  <Form.Label htmlFor="inputPassword5">Title</Form.Label>
  <Form.Control sm={2}
    onChange={(e) => setFirst(e.target.value)}
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Add Main Title of your Blog
  </Form.Text>
<br/>
  <Form.Label htmlFor="inputPassword5">Auther</Form.Label>
  <Form.Control sm={2}
    onChange={(e) => setLast(e.target.value)} 
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Right the Name of creater
  </Form.Text>
  <br/>



  <Form.Label htmlFor="inputPassword5">Artical</Form.Label>
  <Form.Control sm={2}
    onChange={(e) => setEmail(e.target.value)}
    as="textarea" rows={3}
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Write Blog
  </Form.Text>
<br/>

  <Button variant='primary' onClick={() => postFunction()}>Post</Button>
</Container>
    </div>
  )
}

export default CreateBlog