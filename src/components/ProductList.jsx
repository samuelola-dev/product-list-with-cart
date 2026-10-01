import "./ProductList.css"
import ProductCard from "./ProductCard";

const ProductList = ({list, cart, setCart}) => {
    return(
        <div className="product-list">
            {list.map((product, index) => (
                <ProductCard key={index} product={product} cart={cart} setCart={setCart} />
            ))}
        </div>
    )
};

export default ProductList;