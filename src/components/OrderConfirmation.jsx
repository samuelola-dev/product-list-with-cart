import { useEffect,  useRef } from "react";
import "./OrderConfirmation.css";
import ConfirmationItem from "./ConfirmationItem";

const OrderConfirmation = ({cart, setCart, confirm, setConfirm}) => {

    const dialogRef = useRef(null);

    useEffect(() => {
        dialogRef.current.showModal();
        dialogRef.current.scrollTop = 0;
    }, []);

    const orderTotal = cart.reduce((total, item) => total + item.price * item.amount, 0);

    const startNewOrder = () => {
        setCart(cart => []);
        setConfirm(confirm => !confirm)
    }

    return(
        <dialog ref={dialogRef}>
            <div className="dialog-content">

                <img src={"/images/icon-order-confirmed.svg"}/>
                <h2>Order Confirmed</h2>
                <p>We hoped you enjoyed your food</p>

                <div className="order-content">
                    
                    {cart.map((item, index) => (
                        <ConfirmationItem
                            key={index}
                            name={item.name}
                            amount={item.amount}
                            price={item.price}
                            image={item.image}
                        />
                    ))}

                    <div className="order-total">
                        <p>Order Total</p>
                        <p>${orderTotal.toFixed(2)}</p>
                    </div>
                </div>

                <button onClick={startNewOrder}>Start New Order</button>
            </div>
        </dialog>
    );
}

export default OrderConfirmation;