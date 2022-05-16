import React,{useState,useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import axios from 'axios'
export default function SignUp () {

  const [first,setFirst] = useState()
  const [last,setLast] = useState()
  const [e_mail,setEmail] = useState()
  const [pass,setPass] = useState()
  const navi = useNavigate()


  const [blog,setBlog] = useState([])
  useEffect(() => {
      fetch("/api/v1/blogs").then(res => {
          if(res.ok) {
              return res.json()
          }
      }).then(jsonRes => setBlog(jsonRes))
  },[])


  const postFunction = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(first && last && e_mail && pass) {
  if (e_mail.match(validRegex)) {

    axios.post('/api/v1/users', {
      first_name: first,
      last_name: last,
        email: e_mail,
        password: pass
      })
      .then((response) => {
        console.log(">>",response);
        navi("/")
      }, (error) => {
        console.log("<<",error);
      });



  }else {
    alert("invalid Email")

  }
  
  }else{
    alert("All field must be filled")
  }
}
    return (
      <form>
        <Card className='center'>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>

        <div className="mb-3">
          <label>First name</label>
          <input
            onChange={(e) => setFirst(e.target.value)}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
          onChange={(e) => setLast(e.target.value)} 
          type="text" 
          className="form-control" 
          placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <div  className="btn btn-primary" onClick={() => postFunction()}>
            Sign Up
          </div>
        </div>
        <p className="forgot-password text-right black">
          Already have an Account <Link to={'/'} style={{color:"blue"}}>
             login
          
        </Link>
        </p>
          
  </Card.Body>

 
</Card>
      </form>
    )
  }
