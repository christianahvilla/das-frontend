import axios from 'axios';

export const getQueryPayload = (url, params, loaderDispatcher, successDispatch, errorDispatch) => {
    loaderDispatcher();
    axios.get(url, params).then((response) => {
        successDispatch(response);
    }).catch((error) => {
        errorDispatch(error);
    });
};

export const postQueryPayload = (url, data, params, loaderDispatcher, successDispatch, errorDispatch) => {
    loaderDispatcher();
    axios.post(url, data, params).then((response) => {
        successDispatch(response);
    }).catch((error) => {
        errorDispatch(error);
    });
};

export const putQueryPayload = (url, data, params, loaderDispatcher, successDispatch, errorDispatch) => {
    loaderDispatcher();
    axios.put(url, data, params).then((response) => {
        successDispatch(response);
    }).catch((error) => {
        errorDispatch(error);
    });
};

export const delQueryPayload = (url, params, loaderDispatcher, successDispatch, errorDispatch) => {
    loaderDispatcher();
    axios.delete(url, params).then((response) => {
        successDispatch(response);
    }).catch((error) => {
        errorDispatch(error);
    });
};
