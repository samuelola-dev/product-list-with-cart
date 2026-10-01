import AddToCartButton from "./AddToCartButton";
import "./ProductCard.css";

const ProductCard = (props) => {

    const {image, name, category, price} = props;

    return(
        <div className="product-card-container">
            <div className="image"></div>
            <AddToCartButton/>
            <p>Waffle{name}</p>
            <p>Waffle{category}</p>
            <p>$6.7{price}</p>
        </div>
    )
};

export default ProductCard;