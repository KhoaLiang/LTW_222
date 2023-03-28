import '../../css/Customer/menu.css';
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { Outlet } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { GiRetroController } from "react-icons/gi";
import { Nav } from 'react-bootstrap';
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";


function CustomerMenu()
{
      return (
            <div style={ { display: 'flex', flexDirection: 'row', backgroundColor: "#B9FDFD" } }>
                  <Nav className="flex-column menu_container bg-light">
                        <Nav.Item>
                              <Nav.Link href="#" className="link-dark user"><VscAccount size={ 100 } /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                              <Nav.Link href="#" className='item mt-3'><BiHomeAlt2 /> Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                              <Nav.Link href="#" className='item mt-3'><GiRetroController /> Game</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                              <Nav.Link href="#" className='item mt-3'><BsCart /> Cart</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                              <Nav.Link href="#" className='item mt-3'><AiOutlineHeart /> Wishlist</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mt-auto mb-3">
                              <Nav.Link href="/" className='logout_button'><AiOutlineLogout /> Log out</Nav.Link>
                        </Nav.Item>
                  </Nav>
                  <Outlet />
            </div>
      );
}

export default CustomerMenu;