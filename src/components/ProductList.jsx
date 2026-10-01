import "./ProductList.css"
import ProductCard from "./ProductCard";

const ProductList = ({list}) => {
    console.log(list)
    return(
        <div className="product-list">
            {list.map((product, index) => (
                <ProductCard key={index} product={product}/>
            ))}
        </div>
    )
};

export default ProductList;