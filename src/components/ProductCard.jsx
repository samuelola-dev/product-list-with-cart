import {useState} from "react";
import AddToCartButton from "./AddToCartButton";
import "./ProductCard.css";

const ProductCard = ({product, cart, setCart}) => {

    const {image, name, category, price} = product;

    const {desktop} = image;

    const [amount, setAmount] = useState(0);

    return(
        <div className={"product-card"}>

            <img 
                className={amount > 0 ? "image active" : "image"}
                src={desktop}
            />

            <AddToCartButton
                amount={amount} 
                setAmount={setAmount}
                product={{
                    name: product.name,
                    price: product.price
                }}
                cart={cart}
                setCart={setCart}
            />

            <p>{name}</p>
            <p>{category}</p>
            <p>${price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;