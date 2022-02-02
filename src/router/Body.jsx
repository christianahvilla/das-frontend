import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../Components/NotFound';
import Home from '../Components/Home';
import Calendar from '../Components/Calendar';
import Appointment from '../Components/Appointment';

const Body = () => {
    return (
        <Switch>
            <Route exact path="/agenda" component={Calendar} />
            <Route exact path="/agenda/:id" component={Appointment} />
            <Route exact path="/agenda/create" component={Appointment} />
            <Route exact path="/home" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Body;
