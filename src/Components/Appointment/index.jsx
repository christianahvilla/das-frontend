import React, {
    useEffect, useRef, useState, useMemo,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Grid, Row } from 'rsuite';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import useGlobalToaster from '../../hooks/useGlobalToaster';
import appointmentActions from './utils/actions';
import './Appointment.css';
import { getQueryPayload, postQueryPayload, putQueryPayload } from '../../utils/api';
import endpoints from './utils/urls';
import { formattedValues, formmatAppointmentValues } from './utils/helpers';
import Progress from '../Progress';

const params = {
    headers: {
        Accept: 'application/json',
        'auth-token': localStorage.getItem('token'),
    },
};

const Appointment = () => {
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [pushNotification] = useGlobalToaster();
    const appointment = useSelector((state) => state?.appointment);
    const {
        appointment: appointmentValues,
        error,
        status,
        loading,
    } = appointment || {};

    const { id } = useParams();
    const [formValue, setFormValue] = useState(formmatAppointmentValues(appointmentValues));
    const history = useHistory();
    const isEditing = false;

    const dispatch = useDispatch();
    const addAppointmentBegin = () => dispatch(appointmentActions.addAppointmentBegin());
    const addAppointmentSuccess = (response) => dispatch(appointmentActions.addAppointmentSuccess(response));
    const addAppointmentError = (apiError) => dispatch(appointmentActions.addAppointmentError(apiError));

    const fetchAppointmentBegin = () => dispatch(appointmentActions.fetchAppointmentBegin());
    const fetchAppointmentSuccess = (response) => dispatch(appointmentActions.fetchAppointmentSuccess(response));
    const fetchAppointmentError = (apiError) => dispatch(appointmentActions.fetchAppointmentError(apiError));

    const updateAppointmentBegin = () => dispatch(appointmentActions.updateAppointmentBegin());
    const updateAppointmentSuccess = (response) => dispatch(appointmentActions.updateAppointmentSuccess(response));
    const updateAppointmentError = (apiError) => dispatch(appointmentActions.updateAppointmentError(apiError));

    const saveAppointment = () => postQueryPayload(
        endpoints.saveEvent,
        formattedValues(formValue),
        params,
        addAppointmentBegin,
        addAppointmentSuccess,
        addAppointmentError,
    );

    const updateAppointment = () => putQueryPayload(
        endpoints.getEventById(id),
        formattedValues(formValue, id),
        params,
        updateAppointmentBegin,
        updateAppointmentSuccess,
        updateAppointmentError,
    );

    const getAppointment = () => getQueryPayload(
        endpoints.getEventById(id),
        params,
        fetchAppointmentBegin,
        fetchAppointmentSuccess,
        fetchAppointmentError,
    );

    useEffect(() => {
        return () => dispatch(appointmentActions.clearAppointment());
    }, []);

    useEffect(() => {
        if (!id || id === 'create') {
            return;
        }

        getAppointment();
    }, [id]);

    useEffect(() => {
        if (error === null) {
            return;
        }

        pushNotification(error, 'error', 'Error');
    }, [error]);

    useMemo(() => {
        if (appointmentValues === null) {
            return;
        }

        setFormValue(formmatAppointmentValues(appointmentValues));
    }, [appointmentValues]);

    useEffect(() => {
        if (!status) {
            return;
        }

        let message = 'Cita agendada';

        if (id !== 'create') {
            message = 'Cita actualizada';
        }

        pushNotification(message, 'success', 'Operacion Realizada');
    }, [status]);

    const handleSubmit = () => {
        if (!formRef?.current?.check()) {
            pushNotification(formError && 'Completa el formulario', 'error', 'Error');
            return;
        }

        if (id !== 'create') {
            updateAppointment();
            return;
        }

        saveAppointment();
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
            { loading ? (<Progress />)
                : (
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
                ) }
        </Grid>
    );
};

export default Appointment;
