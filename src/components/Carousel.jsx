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
                className="carousel_image"
                style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
            ></div>

            {/* Стрелки отображаются, если более одной картинки */}
            {pictures.length > 1 && (
                <>
                    <button className="carousel_button prev" onClick={handlePrev}>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="carousel_button next" onClick={handleNext}>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>

                    {/* Нумерация текущего изображения */}
                    <div className="carousel_counter">
                        {currentIndex + 1} / {pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Carousel