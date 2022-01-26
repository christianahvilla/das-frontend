import React from 'react';
import { DatePicker, Form } from 'rsuite';

const DateField = (props) => {
    const {
        name, className,
    } = props;

    return (
        <Form.Group className={className} controlId={name}>
            <Form.Control name={name} accepter={DatePicker} />
        </Form.Group>
    );
};

export default DateField;
