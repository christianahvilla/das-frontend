import React from 'react';
import {
    Redirect,
    Route,
} from 'react-router-dom';
import { elementType } from 'prop-types';
import useGetUserInfo from '../hooks/useGetUserInfo';
import useNavigate from '../hooks/useNavigate';

const PublicRoute = (props) => {
    const {
        Component,
        ...rest
    } = props;

    const [isAuthenticated] = useGetUserInfo();
    const [prevRoute] = useNavigate();

    const shouldRender = (prop) => (!isAuthenticated ? (<Component {...prop} />) : (
        <Redirect to={{ pathname: `${prevRoute}` }} />
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
