import React ,{useState,useEffect}from 'react'
import Head from './Head'
import {Container,Col,Row,Card,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
function MyBlogs() {
  const [data,setData] = useState([])
  const [storagevalue,setStorageValue] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate();  
 
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
    }).then(jsonRes => setData(jsonRes))
},[])

const blogData = () => {
}
const onDelete = (id) => {
  fetch(`/api/v1/blogs/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if(res.ok) {
         res.json()
        window.location.reload()

    }
}).then(jsonRes => setData(jsonRes));

}
  return (
    <div>
      <Head/>
    
    
      <Container>
          <Row>
            {data.map((value,i) => {
                          if(value.user_name == storagevalue.name){
                            console.log("Vallaa",value);

              return(
                
                <Col className="col" onClick={() => blogData(value)}>
            <Card className='card_article'>
                <Card.Body>
                  <Card.Title>Title:<br/>{value.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted white">Card Subtitle</Card.Subtitle>
                  <Card.Text className="black">
                    Created by {value.auther}
                  </Card.Text>
                  <Button variant='danger' onClick={() => onDelete(value.id)}>Delete</Button>
                </Card.Body>
              </Card></Col>

)}
            })}
            
            
          </Row>
        </Container>
    
    
    
    </div>
  )
}

export default MyBlogs