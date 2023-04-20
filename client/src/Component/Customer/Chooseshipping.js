import '../../css/Customer/momo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Chooseshipping() {
 
  return (
    <Container fluid>
      <Row>
      
        <Col sm={12} md={12} lg={12} xl={12} className="content">
        <Link to="../cart">   <Button variant="primary" className="position-absolute top-0 end-0">Back</Button></Link>
        <div style={{ fontSize: "36px", textAlign: "center", margin: "40px 0" }}>
         Choose Delivery Method
        </div>
          <Row>
          <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png" alt="example" style={{width: "200px", height: "200px"}} />
                  <Link to="../choosepayment">  <Button variant="primary">Digital </Button></Link>
                </div>
            </Col>

            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img pad">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/817vQf0+X5L._CR0,201,1227,1227_UX256.jpg" alt="example" style={{height: "200px"}} />
                    <Link to="../ship_address">  <Button variant="primary">Physical </Button></Link>
                </div>
            </Col>
            
            
          </Row>
    
        </Col>
      </Row>
      
    </Container>
  );
}

export default Chooseshipping;
