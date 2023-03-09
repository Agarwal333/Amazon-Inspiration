import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";




function Subtotal(){
    const navigate = useNavigate();
    const[{basket}, dispatch] = useStateValue();
    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value)=>(
                    <>
                        <small className="topLine">Part of your order qualifies for FREE Delivery. Select this option at checkout. Details</small>
                        <p className="subtotalAmount">
                            Subtotal({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotalGift">
                            <input type="checkbox"/>
                                This order contains a gift   
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e=> navigate("/payment")}>Proceed to Buy</button>
        </div>
    );
}

export default Subtotal;