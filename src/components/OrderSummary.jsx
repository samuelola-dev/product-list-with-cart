import { useState } from "react";
import "./OrderSummary.css";
import CartItem from "./CartItem";
import OrderConfirmation from "./OrderConfirmation";
import carbonNeutral  from "../assets/images/icon-carbon-neutral.svg";

const OrderSummary = ({cart, setCart}) => {

    const emptyOrder = (
        <div className="empty-order">
            <img  src={"/images/illustration-empty-cart.svg"} />
            <p>Your added items will appear here</p>
        </div>
    );

    const orderTotal = cart.reduce((total, item) => total + item.price * item.amount, 0);

    // confirm order state
    const [confirm, setConfirm] = useState(false);

    const orderSummary = (
        <>
            {cart.map((item, index) => (
                <CartItem
                    key={index}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    cart={cart}
                    setCart={setCart}
                />
            ))}
        
            <div className="order-total">
                <p>Order Total</p>
                <p>${orderTotal.toFixed(2)}</p>
            </div>
        
            <div className="cart-info">
                <img src={carbonNeutral}/>
                <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>
        
            <button className="confirm-order" onClick={()=>setConfirm(confirm => !confirm)}>Confirm Order</button>
            {confirm && (
                <OrderConfirmation 
                    cart={cart} 
                    setCart={setCart}
                    confirm={confirm}
                    setConfirm={setConfirm}
                />
            )};
        </>
    );

    const empty = cart.length === 0;

    return(
        <div className="cart-summary">
            <h2>Your Cart ({cart.length})</h2>
            {empty ? emptyOrder : orderSummary}
        </div>
    );
};

export default OrderSummary;