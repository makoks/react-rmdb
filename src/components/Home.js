import React from 'react';

// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

// Components
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error, setSearchTerm } = useHomeFetch();

    return (
        <>
            {state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].title}
                    text={state.results[0].overview}
                />
            }

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header='Popular movies'>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        image={movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                        clickable
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            <Spinner />
        </>
    );
};

export default Home;
