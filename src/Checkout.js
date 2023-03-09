import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout(){
    const [{basket, user}, dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkoutLeft">
                <div className="title">
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="title">Shopping Cart</h2>
                </div>
                
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                
            </div>
            <div className="checkoutRight">
                <div className="checkoutR">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout;