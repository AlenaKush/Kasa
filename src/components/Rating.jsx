import PropTypes from "prop-types";


function Rating({ rating }) {
    const stars = Array(5).fill();

    return(
        <div className="raiting">
            {stars.map((_, index) => (
                <span key={index} className={`material-symbols-outlined ${index < rating ? 'active' : 'inactive'}`}>
                    kid_star
                </span>
            ))} 
        </div>
    );
}


Rating.propTypes = {
    rating: PropTypes.string.isRequired,
}

export default Rating