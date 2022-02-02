import React, { useRef, useState } from 'react';
import CommonButton from 'das-ui/dist/Button/CommonButton';
import {
    FlexboxGrid,
    Form,
} from 'rsuite';
import { COLOR_COMPONENTS, TYPE_COMPONENTS } from '../../../utils/constants';
import {
    LOGIN_BUTTON_TEXT, PASSWORD_KEY, PASSWORD_PLACEHOLDER, USERNAME_KEY, USERNAME_PLACEHOLDER,
} from '../utils/constants';
import { model } from '../utils/model';
import TextField from './TextField';
import './Form.css';

const LoginForm = () => {
    const formRef = useRef({});
    const [_formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            // eslint-disable-next-line no-console
            console.error('Form Error');
            return;
        }
        // eslint-disable-next-line no-console
        console.log(formValue, 'Form Value');
    };

    return (
        <FlexboxGrid className="container" justify="center" align="middle">
            <FlexboxGrid.Item className="login-container">
                <h5 className="login-form--title ">Incia Sesión en DAS</h5>
                <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} onCheck={setFormError} model={model}>
                    <TextField name={USERNAME_KEY} placeholder={USERNAME_PLACEHOLDER} errorPlacement="rightEnd" />
                    <TextField name={PASSWORD_KEY} placeholder={PASSWORD_PLACEHOLDER} type={PASSWORD_KEY} errorPlacement="rightEnd" autoComplete="off" />
                    <CommonButton
                        onClick={handleSubmit}
                        appearance={TYPE_COMPONENTS[1]}
                        color={COLOR_COMPONENTS[5]}
                        text={LOGIN_BUTTON_TEXT}
                    />
                </Form>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default LoginForm;
