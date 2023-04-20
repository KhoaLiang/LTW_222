import '../../css/Customer/banking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
  const [showThankYou, setShowThankYou] = useState(false);

  // Define a function to handle the button click
  function handleButtonClick() {
    setShowThankYou(true);
  }
  return (
    <Container fluid>
      <Row>
      <Col sm={2} md={2} lg={2} xl={2} className="">
  
  
</Col>
        <Col sm={10} md={10} lg={10} xl={10} className="">
        <Link to="../choosepayment" > <Button variant="primary" className="position-absolute top-0 end-0">Back</Button></Link>
        <div style={{ fontSize: "36px", textAlign: "center", margin: "40px 0" }}>
         Banking
        </div>
          <Row>
          <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://ktcsecurity.com.vn/wp-content/uploads/2020/04/logo_temp.jpg" alt="example" style={{height: "250px", borderRadius: "50%"}} />
                    
            <Button variant="primary"  onClick={handleButtonClick}>confirm</Button>
            {showThankYou && <div className="thank-you-box">Thank you for using our service!</div>}
    
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column pos-info">
                    <div> Please these step to buy your product</div>
                    <div> - Open your bank application</div>
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

export default Cart;
