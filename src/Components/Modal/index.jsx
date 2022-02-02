import React, { useContext } from 'react';
import {
    bool, elementType, string,
} from 'prop-types';
import CommonDialog from 'das-ui/dist/Dialog/CommonDialog';
import { AppContext } from '../../utils/AppContext';

const Dialog = (props) => {
    const {
        backdrop,
        Body,
        Footer,
        full,
        Header,
        keyboard,
        overflow,
        role,
        size,
    } = props;

    const [context, setContext] = useContext(AppContext);
    const {
        openDialog,
    } = context;

    const onClose = () => {
        setContext((currentContext) => setContext({
            ...currentContext,
            openDialog: false,
        }));
    };

    return (
        <CommonDialog
            backdrop={backdrop}
            Body={Body}
            Footer={Footer}
            full={full}
            Header={Header}
            keyboard={keyboard}
            onClose={onClose}
            open={openDialog}
            overflow={overflow}
            role={role}
            size={size}
        />
    );
};

Dialog.defaultProps = {
    backdrop: true,
    Body: null,
    Footer: null,
    full: false,
    Header: null,
    keyboard: false,
    overflow: false,
    role: null,
    size: 'md',
};

Dialog.propTypes = {
    backdrop: string || bool,
    Body: elementType,
    Footer: elementType,
    full: bool,
    Header: elementType,
    keyboard: bool,
    overflow: bool,
    role: string,
    size: string,
};

export default Dialog;
