const Card = ({stars, starsCount, country, title, price, img, openSpots, location}) => {
    let badgeText;
    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card">
            {badgeText &&
                <div className="card--badge">
                    {badgeText}
                </div>}
            <img src={img} alt={title} className="card--image"/>
            <div className="card--stats">
                <img src="images/star.png" alt="star" className="card--star"/>
                <span>{stars}</span>
                <span className="gray">({starsCount}) •&nbsp; </span>
                <span className="gray"> {country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    );
};

export default Card;