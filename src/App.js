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
                {Data.map(data =>
                    <Card
                        key={data.id}
                        img={`images/${data.coverImg}`}
                        stars={data.stats.rating}
                        starsCount={data.stats.reviewCount}
                        country={data.location}
                        title={data.title}
                        price={data.price}
                    />
                )}
            </section>
        </div>
    );
}

export default App;
