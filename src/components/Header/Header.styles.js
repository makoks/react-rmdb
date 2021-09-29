import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 0;
`;

export const LogoImg = styled.img`
    width: 150px;

    @media (min-width: 500px) {
        width: 200px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 80px;

    @media (min-width: 500px) {
        width: 100px;
    }
`;
