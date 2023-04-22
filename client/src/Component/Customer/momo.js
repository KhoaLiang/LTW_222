import '../../css/Customer/momo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Momo() {
  function handleClick() {
    alert('Thank you for using our service');
  }
  return (
    <Container fluid>
      <Row>
      <Col sm={2} md={2} lg={2} xl={2} className="">

  
</Col>
        <Col sm={10} md={10} lg={10} xl={10} >
        <Link to="../choosepayment" > <Button variant="primary" className="position-absolute top-0 end-0">Back</Button></Link>
        <div style={{ fontSize: "36px", textAlign: "center", margin: "40px 0" }}>
         Momo
        </div>
          <Row>
          <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/341273789_251371673954419_5008259796472040346_n.png?stp=dst-png_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Htyh5NsCVJEAX864ga1&_nc_ht=scontent.fsgn4-1.fna&oh=03_AdQIwRJYwZINbpPmd2No7OjQz9kXO1SYAySqPKICDnu60A&oe=646ABE5E" alt="example" style={{height: "200px"}} />
                    
                    <Link to="../bill">  <Button variant="primary" onClick={handleClick}>confirm</Button></Link>
            
    
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column pos-info">
                    <div> Please these step to buy your product</div>
                    <div> - Open Momo</div>
                    <div> - Choose Payment and scan this QR code</div>
                    <div> - Wait for the server to response</div>
                    <div> - Click confirm to finalize the transaction</div>

                </div>
            </Col>
            
          </Row>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Momo;
