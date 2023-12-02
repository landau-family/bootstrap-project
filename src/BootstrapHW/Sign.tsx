import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';

import p from './images/logoB.png';
import * as React from "react";
import { Navigate } from "react-router-dom";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Album from './album';
import { useState } from 'react';

export function Sign(props:{show:boolean,setShow:any}) {
    // const navigate = useNavigate();

  const handleSubmit = (event:any) => {
    event?.preventDefault();
    props.setShow(!props.show);
console.log(props.show)
    // 👇️ redirect to /contacts
    // navigate('C:/Users/landa/Documents/לימודים/תכנות יד/react/react_project_gilly_landau1/src/BootstrapHW/album.tsx' ,{replace: true});
  };
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginTop: '10%' }}>
                <Container className='container col-6 justify-content-center align-items-space-around  align-items-center justify-content-center' style={{ padding: '15px', backgroundColor: 'lightblue', alignContent: 'center' }}>
                    <Row style={{display:'block',marginLeft:'30%',justifyContent:'center'}}>
                        <Col className='justify-content-center col-6 justify-content-center'>
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={p} ></img>
                        </Col>
                    </Row>
                    <Row style={{display:'block',marginLeft:'30%',justifyContent:'center'}}>
                        <Col className=' col-8 justify-content-center'>
                            <h1 className="fw-light">Please sign in</h1>
                        </Col>
                    </Row>
                    <Row style={{display:'block',justifyContent:'center'}}>
                        <Col className='justify-content-center justify-content-center' >
                            <Form className='justify-content-center align-items-center'onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="email" placeholder="Email Adress" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                 <Form.Label>Example textarea</Form.Label> 
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group> */}
                                {/* <Form.Group>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type={type}
                                            id={`default-${type}`}
                                            label={`default ${type}`}
                                        />

                                        
                                    </div>
                                ))}
                            </Form.Group> */}
                                <Form.Check style={{ justifyContent: 'center', alignContent: 'center', marginLeft: '35%' }} aria-label="option 1" label={'Remember me'} />
                            <Button onClick={handleSubmit} variant='primary' type='submit' className='col-12'>Sign in</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default function Page(){
    const [show,setShow]=useState(true);
return(
<>
{show ? Sign({show,setShow}): <Album/>}
</>
);
}
