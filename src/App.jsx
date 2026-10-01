import {useState} from "react";

import OrderSummary from "./components/OrderSummary";
import ProductList from "./components/ProductList";
import data from "../src/data/data.json";

const App = () => {

    const [cart, setCart] = useState([]);

    return(
        <>
            <main>
                <section>
                    <h1>Desserts</h1>
                    <ProductList list={data}/>
                </section>
                <section>
                    <OrderSummary/>
                </section>
            </main>
        </>
    )
};

export default App;