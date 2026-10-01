import "./CartItem.css";
import removeItem from "../assets/images/icon-remove-item.svg";

const CartItem = () => {
    return (
        <div className="cart-item">
            <div>
                <p>Classic Tiramisu</p>
                <p>
                    <span>1x</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>@ $5.50</span>&nbsp;&nbsp;&nbsp;
                    <span>$5.50</span>
                </p>
            </div>
            <img src={removeItem}/>
        </div>
    );
}

export default CartItem;