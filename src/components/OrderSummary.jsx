import "./OrderSummary.css"
import CartItem from "./CartItem";
import carbonNeutral  from "../assets/images/icon-carbon-neutral.svg";

const OrderSummary = () => {
    return(
        <div className="cart-summary">
            <h2>Your Cart (7)</h2>
            <CartItem/>

            <div className="order-total">
                <p>Order Total</p>
                <p>$46.50</p>
            </div>

            <div className="cart-info">
                <img src={carbonNeutral}/>
                <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>

            <button className="confirm-order">Confirm Order</button>
        </div>
    );
};

export default OrderSummary;