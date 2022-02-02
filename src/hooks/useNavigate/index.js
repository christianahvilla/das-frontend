/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';

let promptUserMessage = null;

export default () => {
    const history = useHistory();
    const location = useLocation();
    history.__PREV_ROUTE__ = history.__PREV_ROUTE__ || {};

    const writePrevRouteParams = useCallback(
        (url, queryParams) => {
            history.__PREV_ROUTE__[url] = queryParams;
        },
        [history],
    );

    const queryParams = useMemo(() => {
        return qs.parse(location.search.replace('?', ''));
    }, [location.search]);

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

            const prevPathname = location.pathname;
            if (prevPathname !== url && !history.__PREV_ROUTE__[prevPathname]) {
                writePrevRouteParams(prevPathname, queryParams);
            }

            writePrevRouteParams(url, opts.queryParams);

            if (opts.blank === true) {
                window.open(urlWithParams, '_blank');
            } else {
                history.push(urlWithParams);
                if (opts.reload) window.location.reload();
            }
        },
        [history, location.pathname, queryParams, writePrevRouteParams],
    );

    const navigateUsingPrevParams = useCallback(
        (url, urlForPrevParams) => {
            if (typeof url !== 'string') {
                return;
            }
            const selectedUrl = urlForPrevParams || url;
            const queryNavigateParams = history.__PREV_ROUTE__?.[selectedUrl] || {};

            navigateTo(url, { queryNavigateParams });
        },
        [navigateTo, history.__PREV_ROUTE__],
    );

    const syncParams = useCallback(
        (querySycnParams) => {
            navigateTo(location.pathname, { querySycnParams });
        },
        [location, navigateTo],
    );

    const setPromptMessageWhenUserNavigates = (message) => {
        promptUserMessage = message;
    };

    const prevRoute = () => {
        const params = window.localStorage.getItem('currentRoute').split('/').filter((item) => item.length);
        if (params.length > 1) {
            return window.localStorage.getItem('currentRoute').replace('/', '');
        }

        return params.at(-1);
    };

    return [prevRoute() || 'home', queryParams, navigateTo, syncParams, navigateUsingPrevParams, setPromptMessageWhenUserNavigates];
};
