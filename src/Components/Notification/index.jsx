import React, { forwardRef } from 'react';
import CommonAlert from 'das-ui/dist/Alert/CommonAlert';
import { bool, number, string } from 'prop-types';

const Notification = forwardRef((props, ref) => {
    const {
        closable,
        duration,
        showIcon,
        type,
        header,
        msg,
    } = props;

    return (msg && <CommonAlert innerRef={ref} duration={duration} closable={closable} showIcon={showIcon} type={type} header={header} msg={msg} />
    );
});

Notification.defaultProps = {
    closable: true,
    duration: 3000,
    header: null,
    msg: null,
    showIcon: true,
    type: null,
};

Notification.propTypes = {
    closable: bool,
    duration: number || null,
    header: string || null,
    msg: string || null,
    showIcon: bool,
    type: string || null,
};

export default Notification;
