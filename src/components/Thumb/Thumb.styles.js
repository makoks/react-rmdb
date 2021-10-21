import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: ${({ clickable }) => clickable ? '20px' : '20px 0 0 20px'};
    transition: all 0.3s;
    animation: animateThumb 0.5s;

    ${({ clickable }) => {
        return clickable
            ? ':hover {opacity: 0.8;}'
            : '@media (max-width: 768px) {border-radius: 20px 20px 0 0}';
    }}

    @keyframes animateThumb {
        from {opacity: 0;}
        to {opacity: 1;}
    }
`;
