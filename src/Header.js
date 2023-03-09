import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {signOut} from 'firebase/auth'
import { auth } from './firebase';

function Header(){

    const [{basket, user}, dispatch] = useStateValue();  //to pull values

    const handleAuthentication = ()=>{
        if(user){
            signOut(auth);
        }
    }
    return(
        <div className="header">
            <Link to="/">
                <img className="headerLogo" src="./images/AmazonLogo.png"/>
            </Link>
            <div className="headerSearch">
                <input type="text" className="headerSearchInput"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="headerNav">
                 <Link to={!user && "/login"}>     {/*if there is no user redirect to login page */}
                    <div onClick={handleAuthentication} className="headerOption"> 
                        <span className="headerOptionOne">Hello {user? user.email : "Guest"}</span>
                        <span className="headerOptionTwo">{user? "Sign out":"Sign in"}</span>
                    </div>
                </Link>
                <div className="headerOption"> 
                    <span className="headerOptionOne">Orders &</span>
                    <span className="headerOptionTwo">Returns</span>
                </div>
                <div className="headerOption"> 
                    <span className="headerOptionOne">Your</span>
                    <span className="headerOptionTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="headerBasketOption"> 
                        <ShoppingBasketIcon/>
                        <span className="headerOptionTwo headerBasketCount">{basket?.length}</span>  
                        {/* ? means optional chaining */}
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header;