import React from 'react'
import Head from './Head'
import {useLocation} from 'react-router-dom'
import { Col, Container } from 'react-bootstrap';
import './style.css'
function Blog() {
  const {state} = useLocation();
  return (
    <div><Head/>
    <Container>
    <div className='title_heading'>{state.title}</div>
    <div className='title_heading_auther'>Created by: {state.auther}</div>
    <div className='title_heading_auther'>{state.description}</div>

    </Container>
    </div>
  )
}

export default Blog