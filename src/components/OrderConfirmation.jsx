import { useEffect,  useRef } from "react";
import "./OrderConfirmation.css";

const OrderConfirmation = ({cart}) => {

    const dialogRef = useRef(null);

    // useEffect(() => {
    //     dialogRef.current.showModal();
    // }, []);

    return(
        <div className="dialog" ref={dialogRef}>
            <img src={"/images/icon-order-confirmed.svg"}/>
            <h2>Order Confirmed</h2>
            <p>We hoped you enjoyed your food</p>

            <button>Start New Order</button>
        </div>
    );
}

export default OrderConfirmation;