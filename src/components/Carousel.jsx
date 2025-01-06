import PropTypes from "prop-types";
import { useState } from "react";


function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + pictures.length) % pictures.length
        );
    };

    return (
        <div className="carousel">
            <div
                className="carousel-image"
                style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
            ></div>
            <button className="carousel-button prev" onClick={handlePrev}>
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="carousel-button next" onClick={handleNext}>
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    );
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Carousel