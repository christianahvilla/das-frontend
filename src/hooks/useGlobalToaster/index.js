import React from 'react';
import { Message, toaster } from 'rsuite';
import { PLACEMENT } from './helpers';

const useGlobalToaster = () => {
    const pushNotification = (msg, type, title, closable = true, duration = 3000, showIcon = true) => {
        const notification = (
            <Message type={type} header={title} closable={closable} duration={duration} showIcon={showIcon}>{msg}</Message>
        );
        toaster.push(notification, { placement: PLACEMENT });
    };

    const removeNotification = (key) => toaster.remove(key);

    const clearNotifications = () => toaster.clear();

    return [pushNotification, removeNotification, clearNotifications];
};

export default useGlobalToaster;
