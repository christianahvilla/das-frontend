import React from 'react';
import { func } from 'prop-types';
import CommonButtonToolBar from 'das-ui/dist/ButtonToolbar/CommonButtonToolBar';

const Footer = (props) => {
    const {
        handleSubmit,
        handleClose,
    } = props;

    const Buttons = [
        {
            appearance: 'ghost',
            color: 'red',
            text: 'Descartar',
            onClick: handleClose,
            disabled: false,
            loading: false,
        },
        {
            appearance: 'primary',
            color: 'blue',
            text: 'Guardar',
            onClick: handleSubmit,
            disabled: false,
            loading: false,
        },

    ];

    return (
        <CommonButtonToolBar buttons={Buttons} />
    );
};

Footer.propTyes = {
    handleSubmit: func.isRequired,
    handleClose: func.isRequired,
};

export default Footer;
