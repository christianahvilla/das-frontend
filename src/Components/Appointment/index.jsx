/* eslint-disable no-lone-blocks */
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Col, Grid, Row } from 'rsuite';
import { INITIAL_APPOINTMENT } from './utils/constants';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import useGlobalToaster from '../../hooks/useGlobalToaster';
import appointmentActions from './utils/actions';
import { fakeAddEvent } from './utils/helpers';
import './Appointment.css';

{ /* <Event
                formRef={formRef}
                setFormError={setFormError}
                formValue={formValue}
                setFormValue={onChange}
                isEditing={false}
                onSubmit={handleSubmit}
            /> */ }

const Appointment = () => {
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState(INITIAL_APPOINTMENT);
    const history = useHistory();
    const isEditing = false;
    const [pushNotification] = useGlobalToaster();

    const dispatch = useDispatch();
    const fetchAppointmentBegin = () => dispatch(appointmentActions.fetchAppointmentBegin());
    const fetchAppointmentSuccess = (response) => dispatch(appointmentActions.fetchAppointmentSuccess(response));
    const fetchAppointmentError = (apiError) => dispatch(appointmentActions.fetchAppointmentError(apiError));

    const agendaProvider = () => fakeAddEvent(formValue, fetchAppointmentBegin, fetchAppointmentSuccess, fetchAppointmentError);

    const handleSubmit = () => {
        if (!formRef?.current?.check()) {
            pushNotification(formError && 'Completa el formulario', 'error', 'Error');
            return;
        }

        agendaProvider();
    };

    const onBack = () => {
        history.push('/agenda');
    };

    const onChangeValues = (value, key) => {
        const currentValues = formValue;

        currentValues[key] = value;

        if (key === 'start_date') {
            currentValues.end_date = value;
        }

        if (key === 'start_hour') {
            const hours = new Date(value);
            currentValues.end_hour = new Date(hours.setHours(hours.getHours() + 1));
        }

        setFormValue({
            ...currentValues,
        });
    };

    return (
        <Grid className="appointment--container">
            <Col xs={24}>
                <Row className="appointment--row">
                    <Header isEditing={isEditing} />
                </Row>
                <Row className="appointment--row">
                    <Body
                        formError={formError}
                        formRef={formRef}
                        setFormError={setFormError}
                        formValue={formValue}
                        setFormValue={setFormValue}
                        onChangeValues={onChangeValues}
                    />
                </Row>
                <Row className="appointment--footer appointment--row">
                    <Col className="appointment--footer--col" xsOffset={20} smOffset={15} mdOffset={10}>
                        <Footer handleClose={onBack} handleSubmit={handleSubmit} />
                    </Col>
                </Row>
            </Col>
        </Grid>
    );
};

export default Appointment;
