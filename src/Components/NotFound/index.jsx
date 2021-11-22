import React from 'react';
import { Container } from 'rsuite';
import Not_Found from '../../assets/error404.png';

const NotFound = () => {
    return (
        <Container>
            <img src={Not_Found} alt="Not Found" />
        </Container>
    );
};

export default NotFound;
