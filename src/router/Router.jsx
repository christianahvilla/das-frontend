import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Login from '../Components/Login';
import Layout from '../Components/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../Components/NotFound';

const Router = () => {
    return (
        <Switch>
            <PublicRoute exact path="/login" Component={Login} />
            <PrivateRoute path="/" Component={Layout} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Router;
