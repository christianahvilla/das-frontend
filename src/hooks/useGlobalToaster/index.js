import React from 'react';
import { Message, toaster } from 'rsuite';
import { PLACEMENT } from './helpers';

const useGlobalToaster = () => {
    const pushNotification = (msg, type, title, closable = true, duration = 3000, showIcon = true) => {
        if (!msg || !type || !title || !toaster) {
            return;
        }

        const notification = (
            <Message type={type} header={title} closable={closable} duration={duration} showIcon={showIcon}>{msg}</Message>
        );

        setTimeout(() => toaster.push(notification, { placement: PLACEMENT }, 1000));
    };

    const removeNotification = (key) => toaster.remove(key);

    const clearNotifications = () => toaster.clear();

    return [pushNotification, removeNotification, clearNotifications];
};

export default useGlobalToaster;
