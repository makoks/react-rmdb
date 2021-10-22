import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Breadcrumbs from './Breadcrumbs';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Grid from './Grid';
import Actor from './Actor';
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
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        imageUrl={actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                        name={actor.name}
                        character={actor.character}
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;
