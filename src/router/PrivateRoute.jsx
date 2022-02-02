import React from 'react';
import {
    Redirect,
    Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { elementType } from 'prop-types';

const PrivateRoute = (props) => {
    const {
        Component,
        ...rest
    } = props;

    const authenticated = useSelector((state) => state?.auth?.authenticated) || true;

    const shouldRender = (prop) => (authenticated ? (<Component {...prop} />) : (
        <Redirect to={{ pathname: '/' }} />
    ));

    return (
        <Route
            {...rest}
            render={(prop) => shouldRender(prop)}
        />
    );
};

PrivateRoute.defaultProps = {
    Component: null,
};

PrivateRoute.propTypes = {
    Component: elementType,
};

export default PrivateRoute;
