import {useState} from "react";
import "./AddToCartButton.css";
import cartIcon from "../assets/images/icon-add-to-cart.svg";

const AddToCartButton = ({amount, setAmount}) => {

    const addToCart = (
        <button className="add-to-cart" onClick={() => setAmount(amount => amount + 1)}>
            <img src={cartIcon} alt="cart button"/>
            <span>Add to Cart</span>
        </button>
    )

    const amountControl = (
        <div className="amount-control">

            {/* increase */}
            <button
                onClick={() => setAmount(amount => amount - 1)}
            >
                <img src={"/images/icon-decrement-quantity.svg"}/>
            </button>

            <span>{amount}</span>

            {/* decrease */}
            <button
                onClick={() => setAmount(amount => amount + 1)}
            >
                <img src={"/images/icon-increment-quantity.svg"} alt="increase"/>
            </button>
        </div>
    )

    return(
        <>
            {amount > 0 
                ? (amountControl)
                : (addToCart)
            }
        </>
    )
}

export default AddToCartButton;