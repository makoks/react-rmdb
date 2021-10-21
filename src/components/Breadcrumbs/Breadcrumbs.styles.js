import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: var(--medGrey);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;
    display: flex;

    span {
        color: var(--white);
        padding-right: 10px;
        font-size: var(--fontSmall);

        @media (min-width: 768px) {
            font-size: var(--fontMed);
        }
    }

    a {
        text-decoration-color: var(--white);
    }
`;
