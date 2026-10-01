import OrderSummary from "./components/OrderSummary";
import ProductCard from "./components/ProductCard";

const App = () => {
    return(
        <>
            <main>
                <section>
                    <h1>Desserts</h1>
                    <ProductCard/>
                </section>
                <section>
                    <OrderSummary/>
                </section>
            </main>
        </>
    )
};

export default App;