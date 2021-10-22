import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    display: flex;
    align-items: center;
    min-height: 100px;
    padding: 0 20px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;
    display: block;

    @media (min-width: 768px) {
        display: flex;

    }

    .column {
        display: flex;
        flex: 1;
        background-color: var(--medGrey);
        margin: 20px 0;
        border-radius: 20px;
        justify-content: center;
        align-items: center;

        :first-child {
            margin-left: 0;
        }
        :last-child {
            margin-right: 0;
        }

        @media (min-width: 768px) {
            margin: 0 20px;
        }
    }
`;
