import React from 'react';
import {
    bool, func, shape,
} from 'prop-types';
import DialogFooter from './Components/Footer';
import DialogHeader from './Components/Header';
import DialogBody from './Components/Body';

const Event = (props) => {
    const {
        isEditing,
        onClose,
        onSubmit,
        formRef,
        setFormError,
        formValue,
        setFormValue,
    } = props;

    return (
        <>
            <DialogHeader isEditing={isEditing} />
            <DialogBody
                formRef={formRef}
                setFormError={setFormError}
                formValue={formValue}
                setFormValue={setFormValue}
            />
            <DialogFooter handleClose={onClose} handleSubmit={onSubmit} />
        </>
    );
};

Event.defaultProps = {
    isEditing: false,
    formRef: null,
    formValue: {},
};

Event.defaultProps = {
    isEditing: bool,
    onClose: func.isRequired,
    onSubmit: func.isRequired,
    formRef: func,
    setFormError: func.isRequired,
    formValue: shape({}),
    setFormValue: func.isRequired,
};

export default Event;
