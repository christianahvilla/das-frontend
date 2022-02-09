import React, {
    useEffect, useRef, useState,
} from 'react';
import CommonButton from 'das-ui/dist/Button/CommonButton';
import { FlexboxGrid, Form } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { COLOR_COMPONENTS, TYPE_COMPONENTS } from '../../../utils/constants';
import {
    LOGIN_BUTTON_TEXT, PASSWORD_KEY, PASSWORD_PLACEHOLDER, USERNAME_KEY, USERNAME_PLACEHOLDER,
} from '../utils/constants';
import { model } from '../utils/model';
import TextField from '../../TextField/TextField';
import './Form.css';
import authActions from '../utils/actions';
import useGlobalToaster from '../../../hooks/useGlobalToaster';
import { postQueryPayload } from '../../../utils/api';
import endpoints from '../utils/urls';

const params = {
    headers: {
        Accept: 'application/json',
    },
};

const LoginForm = () => {
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const [pushNotification] = useGlobalToaster();

    const auth = useSelector((state) => state?.auth);
    const {
        loading,
        error,
    } = auth || {};

    const dispatch = useDispatch();
    const fetchAuthBegin = () => dispatch(authActions.fetchAuthBegin());
    const fetchAuthSuccess = (response) => dispatch(authActions.fetchAuthSuccess(response));
    const fetchAuthError = (apiError) => dispatch(authActions.fetchAuthError(apiError));

    const authProvider = () => postQueryPayload(endpoints.login, formValue, params, fetchAuthBegin, fetchAuthSuccess, fetchAuthError);

    useEffect(() => {
        if (!error) {
            return;
        }

        pushNotification(error, 'error', 'Error');
    }, [error]);

    const handleSubmit = () => {
        if (!formRef?.current?.check()) {
            pushNotification(formError && 'Completa el formulario', 'error', 'Error');
            return;
        }

        authProvider();
    };

    return (
        <FlexboxGrid className="container" justify="center" align="middle">
            <FlexboxGrid.Item className="login-container">
                <h5 className="login-form--title ">Incia Sesión en DAS</h5>
                <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} onCheck={setFormError} model={model}>
                    <TextField className="login-input" name={USERNAME_KEY} placeholder={USERNAME_PLACEHOLDER} />
                    <TextField className="login-input" name={PASSWORD_KEY} placeholder={PASSWORD_PLACEHOLDER} type={PASSWORD_KEY} autoComplete="off" />
                    <CommonButton
                        onClick={handleSubmit}
                        appearance={TYPE_COMPONENTS[1]}
                        color={COLOR_COMPONENTS[5]}
                        text={LOGIN_BUTTON_TEXT}
                        loading={loading}
                    />
                </Form>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default LoginForm;
