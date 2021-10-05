import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100px;
    background-color: var(--darkGrey);
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    background-color: var(--medGrey);
    height: 55px;
    border-radius: 40px;
    max-width: var(--maxWidth);
    margin: 0 auto;
    width: 100%;
    color: var(--white);

    img {
        position: absolute;
        top: 14px;
        left: 15px;
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        width: 95%;
        height: 40px;
        position: absolute;
        background-color: transparent;
        color: var(--white);
        border: 0;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;

        :focus {
            outline: none;
        }
    }
`;
