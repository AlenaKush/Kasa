import PropTypes from 'prop-types';

function Banner({ image, text }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1>{text}</h1>
        </div>
    );
};

Banner.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};

export default Banner