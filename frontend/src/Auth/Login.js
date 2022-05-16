import React,{useState,useEffect} from 'react'
import { Card } from 'react-bootstrap'
import './auth.css'
import { Link ,useNavigate} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
export default function Login () {
    
  const [data,setData] = useState([])
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [name,setName] = useState()
  const [func,setFunc] = useState()
  const navigate = useNavigate();  
 
useEffect(() => {
    fetch("/api/v1/users").then(res => {
        if(res.ok) {
            return res.json()
        }
    }).then(jsonRes => setData(jsonRes))
},[])


  function userLogin() {
    const result = data.map(permission => {
      var permissionData = data.find(element => element.email === email);
      setName(permissionData)
    });
    
    setFunc(1)
    
}
 const newF = () => {
     
  if (data.filter(e => e.email === email).length > 0 &&
  data.filter(e => e.password === password).length > 0 
  ) { 
        localStorage.setItem("active",JSON.stringify({name:name.first_name + "ali", mail:email, pass:password }));
        window.location.reload()
      } else {
        console.log("email not exist")
      }
 }
 if(func == 1) {
  newF()
  setFunc(2)

 }
  
    return (
      <form>
<Card className='center'>
        <Card.Body>
          <Card.Title>Sign In</Card.Title>

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
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        

        <div className="d-grid">
          <div type="submit" className="btn btn-primary"  onClick={() => userLogin()}> 
            Submit
          </div>
        </div>
        
        <p className="forgot-password text-right black">
          Dosn't have an Account <Link to={'/sign-up'} style={{color:"blue"}}>
             Create
          
        </Link>
        </p>
    
  </Card.Body>

 
</Card>
      </form>
    )
  
}
