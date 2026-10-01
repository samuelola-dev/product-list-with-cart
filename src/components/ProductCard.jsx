import AddToCartButton from "./AddToCartButton";
import "./ProductCard.css";

const ProductCard = ({product}) => {

    const {image, name, category, price} = product;

    const {desktop} = image;

    return(
        <div className="product-card-container">
            <img className="image" src={desktop}/>
            <AddToCartButton/>
            <p>{name}</p>
            <p>{category}</p>
            <p>${price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;