import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Card
                stars={5.0}
                starsCount={6}
                country={"USA"}
                title={"Life Lessons with Katie Zaferes"}
                price={136}
            />
        </div>
    );
}

export default App;
