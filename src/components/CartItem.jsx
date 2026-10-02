import "./CartItem.css";

const CartItem = ({name, amount, price, cart, setCart}) => {

    const total = amount * price;

    const removeItem = () => {
        setCart(cart => cart.filter(item => item.name !== name));
    };

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
            <button className="remove-item" onClick={removeItem}>
                <img src={"/images/icon-remove-item.svg"}/>
            </button>
        </div>
    );
}

export default CartItem;