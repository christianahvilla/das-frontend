import React, { createContext, useMemo, useState } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppProvider = (props) => {
    const {
        children,
    } = props;

    const [state, setState] = useState({
        openDialog: false,
        openSnackbar: false,
        notificationMessage: '',
        notificationSeverity: '',
        authtenticated: false,
        sigin: null,
        logout: null,
        user: null,
    });

    const value = useMemo(() => [state, setState], [state]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
