import '../../css/Customer/ship_address.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';

function handleClick() {
  alert('Sucess! Now you will be sent to the payment service');
}

function Ship_address() {
  
  const [phone, setPhone] = useState('');
  
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidName1, setIsValidName1] = useState(false);

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    const nameRegex = /^[a-zA-Z ]+$/; // regular expression to only allow letters and spaces
    setIsValidName(nameRegex.test(inputName));
  }
  /////////////////////
  const handleNameChange1 = (event) => {
    const inputName1 = event.target.value;
    setName1(inputName1);
    const nameRegex1 = /^[a-zA-Z0-9@. ]+$/; // regular expression to only allow letters and spaces
    setIsValidName1(nameRegex1.test(inputName1));
  }
  
  
  return (
    <Container fluid>
      <Row>
      <Col sm={2} md={2} lg={2} xl={2} className="">
  
   
       
</Col>
        <Col sm={10} md={10} lg={10} xl={10} className="content">
        <Link to="../chooseshipping">   <Button variant="primary" className="position-absolute top-0 end-0">Back</Button></Link>        
          <Row>
          <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://a.pinatafarm.com/620x620/32d6b48d05/doge.jpg" alt="example" style={{height: "200px"}} />
                    
           
    
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
              <div className="d-flex flex-column pos-info">
              <div>
                  <input type="text" placeholder="Enter name" value={name} onChange={handleNameChange}/>
                   {!isValidName && <span style={{ color: 'red' }}>Invalid name format</span>}
              </div>
              <div>
                  <input type="text" placeholder="Enter address" value={name1} onChange={handleNameChange1}/>
                   {!isValidName1 && <span style={{ color: 'red' }}>Invalid Address</span>}
              </div>
                    <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} 
                      style={{ width: '200px', height: '40px', fontSize: '16px' }}
                    />

              </div>
            </Col>
            
          </Row>
          <Link to={isValidName && isValidName1 ? "../choosepayment" : ""}>
  <button className="long-button" onClick={handleClick} disabled={!isValidName || !isValidName1}>Purchase</button>
</Link>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Ship_address;
