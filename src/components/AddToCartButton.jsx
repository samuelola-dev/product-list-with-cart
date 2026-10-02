import {useState} from "react";
import "./AddToCartButton.css";

const AddToCartButton = ({amount, product, cart, setCart}) => {

    const increaseAmount = () => {

        setCart(cart => {

            const exists = cart.some(item => item.name === product.name);

            if (exists) {
                return cart.map(item => item.name === product.name
                    ? {...item, amount: item.amount + 1}
                    : item
                )
            }

            return [...cart, {...product, amount: 1}];
        })
    }

        // if cart item name exists in the cart, update the amount by one
        // if not add new product to cart

    const decreaseAmount = () => {

        setCart(cart => {

            return cart
                .map(item => item.name === product.name
                    ? {...item, amount: item.amount - 1}
                    : item
                )
                .filter(item => item.amount > 0);
        });
    }

    const addToCart = (
        <button className="add-to-cart" onClick={increaseAmount}>
            <img src={"/images/icon-add-to-cart.svg"} alt="cart button"/>
            <span>Add to Cart</span>
        </button>
    )

    const amountControl = (
        <div className="amount-control">

            {/* increase */}
            <button
                onClick={decreaseAmount}
            >
                <img src={"/images/icon-decrement-quantity.svg"}/>
            </button>

            <span>{amount}</span>

            {/* decrease */}
            <button
                onClick={increaseAmount}
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