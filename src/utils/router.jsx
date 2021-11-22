import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import NotFound from '../Components/NotFound';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<NotFound />} />
            <Route exact path="/reservations" element={<NotFound />} />
            <Route to="/" element={<NotFound />} />
        </Routes>
    );
};

export default Router;