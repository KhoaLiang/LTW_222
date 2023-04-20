import '../../css/Customer/momo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Choosepayment() {
 
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={12} xl={12} className="content">
        <Link to="../chooseshipping">   <Button variant="primary" className="position-absolute top-0 end-0">Back</Button></Link>
        <div style={{ fontSize: "36px", textAlign: "center", margin: "40px 0" }}>
         Choose Payment Method
        </div>
          <Row>
          <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg" alt="example" style={{height: "200px"}} />
                    <Link to="../momo">    <Button variant="primary">Momo </Button> </Link>
                </div>
            </Col>

            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img pad">
                    <img src="https://ktcsecurity.com.vn/wp-content/uploads/2020/04/logo_temp.jpg" alt="example" style={{height: "200px"}} />
                    <Link to="../banking">    <Button variant="primary">Banking </Button> </Link>
                </div>
            </Col>
            
            
          </Row>
    
        </Col>
      </Row>
      
    </Container>
  );
}

export default Choosepayment;
