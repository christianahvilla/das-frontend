/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';

let promptUserMessage = null;

export default () => {
    const history = useHistory();
    const location = useLocation();
    history.__PREV_ROUTE__ = history.__PREV_ROUTE__ || {};

    const navigateTo = useCallback(
        (url, options) => {
            if (typeof url !== 'string') {
                return;
            }

            window.localStorage.setItem('currentRoute', url);

            // Note: using confirm for consistency. "onbeforeunload" automatically triggers a native popup message.
            if (typeof promptUserMessage === 'string' && !window.confirm(promptUserMessage)) {
                return;
            }
            promptUserMessage = null; // User moved to another page, so let's cleanup

            const opts = options || {};
            const stringParams = qs.stringify(opts.queryParams);
            const urlWithParams = `${url}${stringParams ? `?${stringParams}` : ''}`;

            if (opts.blank === true) {
                window.open(urlWithParams, '_blank');
            } else {
                history.push(urlWithParams);
                if (opts.reload) window.location.reload();
            }
        },
        [history, location.pathname],
    );

    const prevRoute = window.localStorage.getItem('currentRoute') || 'home';

    const sideBarRoute = prevRoute.split('/')[1];

    return [prevRoute, navigateTo, sideBarRoute];
};
