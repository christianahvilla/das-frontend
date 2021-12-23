import React from 'react';
import {
    Redirect,
    Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { elementType } from 'prop-types';

const PublicRoute = (props) => {
    const {
        Component,
        ...rest
    } = props;

    const authenticated = useSelector((state) => state?.auth?.authenticated);

    const shouldRender = (prop) => (!authenticated ? (<Component {...prop} />) : (
        <Redirect to={{ pathname: '/login' }} />
    ));

    return (
        <Route
            {...rest}
            render={(prop) => shouldRender(prop)}
        />
    );
};

PublicRoute.defaultProps = {
    Component: null,
};

PublicRoute.propTypes = {
    Component: elementType,
};

export default PublicRoute;
