import React from 'react';
import {
    Redirect,
    Route,
} from 'react-router-dom';
import { elementType } from 'prop-types';
import useGetUserInfo from '../hooks/useGetUserInfo';

const PrivateRoute = (props) => {
    const {
        Component,
        ...rest
    } = props;

    const [isAuthenticated] = useGetUserInfo();

    const shouldRender = (prop) => (isAuthenticated ? (<Component {...prop} />) : (
        <Redirect to={{ pathname: '/login' }} />
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
