import '../../css/Customer/bill.css';
import BoxWithCopyButton from "../box";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect  } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Bill() {

  const savedCount1 = sessionStorage.getItem('count1');
  const initialCount1 = savedCount1 !== null ? parseInt(savedCount1) : 0;
  const [count1, setCount1] = useState(initialCount1);

  const savedCount2 = sessionStorage.getItem('count2');
  const initialCount2 = savedCount2 !== null ? parseInt(savedCount2) : 0;
  const [count2, setCount2] = useState(initialCount2);

  const [costgame1, setCostgame] = useState(count1 * 5);
  useEffect(() => {
    setCostgame(count1 * 5);
  }, [count1]);
  const [costgame2, setCostgame2] = useState(count2 * 10);
  useEffect(() => {
    setCostgame2(count2 * 10);
  }, [count2]);
 
  
  return (
    <Container fluid>
      <Row>
      <Col sm={1} md={1} lg={1} xl={1} className="">

  
</Col>
        <Col sm={11} md={11} lg={11} xl={11} className="">
            <Button variant="primary" className="position-absolute top-0 end-0">Back To Home</Button>
                    <div className="order-info">
                         
                <div className="row">
                <h3 style={{ textAlign: 'center',  }}>Order information</h3>
                    <div className="col-md-6 order-info-col">
                    <p>Order number: #6065906</p>
                    <p>Creation Date: 2023-02-25 10:07:48</p>
                    <p>Order Status:Processed</p>
                   
                    </div>
                    
                    <div className="col-md-6">
                    
                    <p>Total product value: {costgame1+costgame2}$</p>
                    <p>Recipient: betsonavietnam@gmail.com</p>
                    </div>
                </div>
                </div>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png" alt="example" style={{height: "200px"}} />
                    
    
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column pos-info">
                <div> Name: Resident Evil 4</div>
                    <div> Amount: {count2}</div>
                    <div>Status: <span style={{ color: 'green' }}>Purchased</span></div>
                    <div> Cost : $10</div>
                    <BoxWithCopyButton text="Some Download Link" />
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://upload.wikimedia.org/wikipedia/fr/b/bd/Doki_Doki_Literature_Club%21_Logo.png" alt="example" style={{height: "200px"}} />
                    
    
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column pos-info">
                    <div> Name: Doki Doki Literature Club</div>
                    <div> Amount: {count1}</div>
                    <div>Status: <span style={{ color: 'green' }}>Purchased</span></div>
                    <div> Cost : $5</div>
                    <BoxWithCopyButton text="Some Download Link" />
                </div>
            </Col>
            
          </Row>

        </Col>
      </Row>
      
    </Container>
  );
}

export default Bill;
