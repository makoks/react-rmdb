import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => {
    return clickable ? (
        <div>
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-poster' />
            </Link>
        </div>
    ) : (
        <div>
            <Image src={image} alt='movie-poster' />
        </div>
    );
};

export default Thumb;
