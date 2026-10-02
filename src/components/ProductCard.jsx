import {useState} from "react";
import AddToCartButton from "./AddToCartButton";
import "./ProductCard.css";

const ProductCard = ({product, cart, setCart}) => {

    const {image, name, category, price} = product;

    const {desktop} = image;

    // get amount of product from cart
    const amount = cart.find(item => item.name === product.name)?.amount ?? 0;

    return(
        <div className={"product-card"}>

            <img 
                className={amount > 0 ? "image active" : "image"}
                src={desktop}
            />

            <AddToCartButton
                amount={amount} 
                product={{
                    name: product.name,
                    price: product.price,
                    image: product.image
                }}
                cart={cart}
                setCart={setCart}
            />

            <p>{category}</p>
            <p>{name}</p>
            <p>${price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;