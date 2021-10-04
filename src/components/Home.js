import React from 'react';

// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

// Components
import HeroImage from './HeroImage';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error } = useHomeFetch();

    return (
        <>
            {state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].title}
                    text={state.results[0].overview}
                />
            }
        </>
    );
};

export default Home;
