import styled from 'styled-components';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    background: ${({ backdrop }) => {
        return backdrop
            ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
            : '#000';
    }};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {opacity: 0;}
        to {opacity: 1}
    }
`;

export const Content = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    border-radius: 20px;

    @media (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    padding: 20px 40px;
    color: var(--white);
    width: 100%auto;
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .score {
        width: 35px;
        height: 35px;
        background-color: var(--white);
        color: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        margin: 0;
    }

    .directors {
        margin: 0 0 0 40px;

        p {
            margin: 0;
        }
    }

    h1 {
        @media (max-width: 768) {
            font-size: var(--fontBig);
        }
    }
`;
