import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Breadcrumbs from './Breadcrumbs';
import Grid from './Grid';
import Spinner from './Spinner';

// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

// Images
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    if(loading) return <Spinner />;
    if(error) return <div>Something went wrong...</div>;

    return (
        <>
            <Breadcrumbs movieTitle={movie.title} />
        </>
    );
};

export default Movie;
