/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommonButton from 'das-ui/dist/Button/CommonButton';
import CommonAgenda from 'das-ui/dist/Agenda/CommonAgenda';
import {
    Col, Grid, Row,
} from 'rsuite';
import './Calendar.css';
import PlusIcon from '@rsuite/icons/Plus';
import useGlobalToaster from '../../hooks/useGlobalToaster';
import useGlobalLoader from '../../hooks/useGlobalLoader';
import useNavigate from '../../hooks/useNavigate';
import { renderCell } from './utils/helpers';
import eventActions from './utils/actions';
import endpoints from './utils/urls';
import { getQueryPayload } from '../../utils/api';
import Progress from '../Progress';

const params = {
    headers: {
        Accept: 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
};

const Calendar = () => {
    const [, navigateTo] = useNavigate();
    const [pushNotification] = useGlobalToaster();
    const [setLoader] = useGlobalLoader();
    const dispatch = useDispatch();
    const fetchEventBegin = () => dispatch(eventActions.fetchEventBegin());
    const fetchEventSuccess = (response) => dispatch(eventActions.fetchEventSuccess(response));
    const fetchEventError = (apiError) => dispatch(eventActions.fetchEventError(apiError));

    const agenda = useSelector((state) => state?.agenda);
    const {
        error,
        loading,
        events,
    } = agenda || {};

    const getEvents = () => getQueryPayload(endpoints.getEvents, params, fetchEventBegin, fetchEventSuccess, fetchEventError);

    useEffect(() => { setLoader(loading); }, [loading]);

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        if (error === null) {
            return;
        }

        dispatch(eventActions.clearError());
        pushNotification(error, 'error', 'Error');
    }, [error]);

    const handleCreate = () => {
        navigateTo('/agenda/create');
    };

    const handleEdit = (id) => {
        navigateTo(typeof id === 'string' ? `/agenda/${id}` : '404');
    };

    return (
        <Grid>
            {loading ? (<Progress />) : (
                <Row>
                    <Col xs={24}>
                        <Row>
                            <h2 className="calendar-title">Agenda</h2>
                            <Col xsOffset={19} smOffset={18} mdOffset={21}>
                                <CommonButton Icon={() => <PlusIcon />} onClick={handleCreate} color="blue" appearance="primary" text="Nueva Cita" />
                            </Col>
                        </Row>
                        <Row className="calendar-container">
                            <CommonAgenda bordered renderCell={(date) => renderCell(date, handleEdit, events)} />
                        </Row>
                    </Col>
                </Row>
            )}
        </Grid>
    );
};

export default Calendar;
