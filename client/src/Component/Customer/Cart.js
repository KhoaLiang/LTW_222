import '../../css/Customer/cart.css';
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { Outlet } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { GiRetroController } from "react-icons/gi";
import { Nav } from 'react-bootstrap';
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Cart() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
  
    const handleIncrement1 = () => {
      setCount1(count1 + 1);
    };
  
    const handleDecrement1 = () => {
      if (count1 > 0) {
        setCount1(count1 - 1);
      }
    };
  
    const handleIncrement2 = () => {
      setCount2(count2 + 1);
    };
  
    const handleDecrement2 = () => {
      if (count2 > 0) {
        setCount2(count2 - 1);
      }
    };
   
  
  return (
    <Container fluid>
      <Row>
      <Col sm={2} md={2} lg={2} xl={2} className="">

  
</Col>
        <Col sm={10} md={10} lg={10} xl={10} className="">
            <Button variant="primary" className="position-absolute top-0 end-0">Back</Button>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png" alt="example" style={{height: "200px"}} />
                    
                <Button variant="primary" >Delete</Button>
    
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column pos-info">
                <div> Name: Resident Evil 4</div>
                    <div> Genre: Open World, Shooting, Horror</div>
                    <div> Status: Available</div>
                    <div> Cost : $10</div>
                    <div className="d-flex align-items-center justify-content-left">
                         <Button variant="outline-secondary" onClick={handleDecrement2}>
                                -
                             </Button>
                            <div className="mx-2">{count2}</div>
                        <Button variant="outline-secondary" onClick={handleIncrement2}>
                                +
                         </Button>
                    </div>

                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column align-items-center pos-img">
                    <img src="https://upload.wikimedia.org/wikipedia/fr/b/bd/Doki_Doki_Literature_Club%21_Logo.png" alt="example" style={{height: "200px"}} />
                    
                <Button variant="primary" >Delete</Button>
    
                </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} >
                <div className="d-flex flex-column pos-info">
                    <div> Name: Doki Doki Literature Club</div>
                    <div> Genre: Visual Novel, Dating, Horror</div>
                    <div> Status: Available</div>
                    <div> Cost : $10</div>
                    <div className="d-flex align-items-center justify-content-left">
                         <Button variant="outline-secondary" onClick={handleDecrement1}>
                                -
                             </Button>
                            <div className="mx-2">{count1}</div>
                        <Button variant="outline-secondary" onClick={handleIncrement1}>
                                +
                         </Button>
                    </div>

                </div>
            </Col>
            
          </Row>
          <Link to="../choosepayment">  <button className="long-button">Purchase</button></Link>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Cart;
