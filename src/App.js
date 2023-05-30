import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data"
function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {Data.map(item =>
                    <Card
                        key={item.id}
                        item={item}
                    />
                )}
            </section>
        </div>
    );
}

export default App;
