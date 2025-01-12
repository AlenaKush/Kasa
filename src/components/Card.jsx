import PropTypes from 'prop-types';

function Card({ cover, title }) {
    return(

        <div className='card' style={{ 
            backgroundImage: 
                `linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.7)), 
                url(${cover})` 
            }}>
            <h2 className='card_title'>{title}</h2>
        </div>

    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}

export default Card