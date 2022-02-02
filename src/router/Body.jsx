import { string } from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../Components/NotFound';
import Home from '../Components/Home';

const Body = (props) => {
    const { path } = props;
    return (
        <Switch>
            <Route exact path={`${path}`} component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

Body.propTypes = {
    path: string.isRequired,
};

export default Body;
