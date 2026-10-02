import {useState} from "react";

import OrderSummary from "./components/OrderSummary";
import ProductList from "./components/ProductList";
import data from "../src/data/data.json";

const App = () => {

    const [cart, setCart] = useState([]);

    console.log(cart)

    return(
        <>
            <main>
                <section>
                    <h1>Desserts</h1>
                    <ProductList list={data} cart={cart} setCart={setCart}/>
                </section>
                <section>
                    <OrderSummary cart={cart} setCart={setCart}/>
                </section>
            </main>

            <p id="author">coded by <span>Samuel Ola</span></p>
        </>
    )
};

export default App;