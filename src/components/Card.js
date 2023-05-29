import KatieZaferesPhoto from "../images/katie-zaferes.png"
import Star from "../images/star.png";
const Card = ({stars, starsCount, country, title, price}) => {
    return (
        <div className="card">
            <img src={KatieZaferesPhoto} alt="Katie Zaferes" className="card--image"/>
            <div className="card--stats">
                <img src={Star} alt="star" className="card--star"/>
                <span>{stars}</span>
                <span className="gray">({starsCount}) &#8226; </span>
                <span className="gray"> {country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
};

export default Card;