import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => {
    return clickable ? (
        <div>
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-poster' clickable />
            </Link>
        </div>
    ) : (
        <div>
            <Image src={image} alt='movie-poster' />
        </div>
    );
};

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
};

export default Thumb;
