
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './LoginPage';
import PaymentPage from './PaymentPage';
import { useEffect } from 'react';
import { auth } from './firebase';
import {onAuthStateChanged} from 'firebase/auth'
import { useStateValue } from './StateProvider';

function App() {
const [{basket}, dispatch] = useStateValue();

  // 
  useEffect(()=>{
    onAuthStateChanged(auth, authUser =>{
      console.log(authUser);
      if(authUser){
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <div>
          
        <Routes>
          <Route path="/" element={<><Header/><Home/></>}></Route>
          <Route path="/checkout" element={<><Header/><Checkout/></>}></Route>
          <Route path="/payment" element={<><Header/><PaymentPage/></>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>

        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
