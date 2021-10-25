import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ imageUrl, name, character }) => (
    <Wrapper>
        <Image src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
};

export default Actor;
