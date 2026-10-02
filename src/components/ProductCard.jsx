import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import "./ProductCard.css";

const ProductCard = ({product, cart, setCart}) => {

    // handles image to display based on screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const {image, name, category, price} = product;
    
    let imageSrc;

    if (screenWidth <= 768) imageSrc = image.mobile;
    else if (screenWidth <= 1024) imageSrc = image.tablet;
    else imageSrc = image.desktop;

    // get amount of product from cart
    const amount = cart.find(item => item.name === product.name)?.amount ?? 0;

    return(
        <div className={"product-card"}>

            <img 
                className={amount > 0 ? "image active" : "image"}
                src={imageSrc}
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