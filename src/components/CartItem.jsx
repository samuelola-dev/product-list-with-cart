import "./CartItem.css";
import removeItem from "../assets/images/icon-remove-item.svg";

const CartItem = ({name, amount, price}) => {

    const total = amount * price;

    return (
        <div className="cart-item">
            <div>
                <p>{name}</p>
                <p className="cart-item-details">
                    <span>{amount}x</span>&nbsp;&nbsp;&nbsp;
                    <span>@ {price.toFixed(2)}</span>&nbsp;&nbsp;&nbsp;
                    <span>${total.toFixed(2)}</span>
                </p>
            </div>
            <img src={removeItem}/>
        </div>
    );
}

export default CartItem;