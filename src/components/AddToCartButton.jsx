import "./AddToCartButton.css";
import cartIcon from "../assets/images/icon-add-to-cart.svg";

const AddToCartButton = () => {
    return(
        <button>
            <img src={cartIcon} alt="cart button"/>
            <span>Add to Cart</span>
        </button>
    )
}

export default AddToCartButton;