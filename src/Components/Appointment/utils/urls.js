const API_URL = `${process.env.REACT_APP_API_URL}`;

const endpoints = {
    saveEvent: `${API_URL}/events`,

    getEventById: (id) => `${API_URL}/events/${id || ''}`,
};

export default endpoints;
