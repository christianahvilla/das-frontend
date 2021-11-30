import React, { forwardRef } from 'react';
import { Form } from 'rsuite';
import './TextField.css';

const TextField = forwardRef((props, ref) => {
    const {
        name,
        accepter,
        ...rest
    } = props;

    return (
        <Form.Group className="login-input" controlId={name} ref={ref}>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
});

export default TextField;
