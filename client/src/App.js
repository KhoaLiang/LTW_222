import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Customer/Login';
import Signup from './Component/Customer/Signup';
import ForgotPassword from './Component/Customer/ForgotPassword';
import CreateNewPassWord from './Component/Customer/CreateNewPassword';
import Confirmation from './Component/Customer/Confirmation';
import CustomerMenu from './Component/Customer/menu';
import Cart from './Component/Customer/Cart';
import Momo from './Component/Customer/momo';
import Banking from './Component/Customer/banking';
import Ship_address from './Component/Customer/ship_address';
import Chooseshipping from './Component/Customer/Chooseshipping';
import Choosepayment from './Component/Customer/Choosepayment';


// import CusDetail from './Component/Admin/cusdetail';
import CusList from './Component/Admin/cuslist';
// import Stat from './Component/Admin/Stat';

import AdminMenu from './Component/Admin/menu';
import AdminHome from './Component/Admin/home';
import AdminLogin from './Component/Admin/Login';
import AdminForgotPassword from './Component/Admin/ForgotPassword';
import AdminCreateNewPassword from './Component/Admin/CreateNewPassword'

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={ <Login /> } />
            <Route path="sign_up" element={ <Signup /> } />
            <Route path="forgot_password" element={ <ForgotPassword /> } />
            <Route path="create_new_password" element={ <CreateNewPassWord /> } />
            <Route path="confirm" element={ <Confirmation /> } />
            <Route  element={ <CustomerMenu /> }> {/*this is only temporary */ }
            <Route path="cart" element={ <Cart /> } />{/*newly added */ }
              <Route path="momo" element={ <Momo /> } />{/*newly added */ }
              <Route path="banking" element={ <Banking /> } />{/*newly added */ }
              <Route path="ship_address" element={ <Ship_address /> } />{/*newly added */ }
              <Route path="chooseshipping" element={ <Chooseshipping /> } />{/*newly added */ }
              <Route path="choosepayment" element={ <Choosepayment /> } />{/*newly added */ }
           
           

            </Route>
          </Route>
          <Route path="/admin">
            <Route index element={ <AdminLogin /> } />
            <Route path="forgot_password" element={ <AdminForgotPassword /> } />
            <Route path="create_new_password" element={ <AdminCreateNewPassword /> } />
            <Route element={ <AdminMenu /> }>
              <Route path="home" element={ <AdminHome /> } />
              <Route path="customerlist" element={ <CusList /> } />
             
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;



