import photogrid from "../images/photo-grid.png";

const Hero = () => {
    return (
        <main>
            <img src={photogrid} alt="Grid of photos" className="main--image"/>
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </main>
    );
};

export default Hero;