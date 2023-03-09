import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function PaymentPage(){
    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="payment">
            <div className="paymentContainer">
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Delivery Address</h3>
                        <p>abcd@gmail.com</p>
                        <p>Abc building</p>
                        <p>123 CA</p>
                    </div>
                </div>
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>REview Items and DElivery Address</h3>
                    </div>
                    <div className="paymentItems">
                        {basket.map(item=>{
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        })}
                    </div>
                </div>
                <div className="paymentSection">

                </div>
            </div>
        </div>
    )
}

export default PaymentPage;