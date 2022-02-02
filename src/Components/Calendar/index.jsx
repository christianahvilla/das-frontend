/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CommonButton from 'das-ui/dist/Button/CommonButton';
import CommonAgenda from 'das-ui/dist/Agenda/CommonAgenda';
import {
    Col, Grid, Row,
} from 'rsuite';
// import {
//     EVENT,
// } from './utils/constants';
import './Calendar.css';
import PlusIcon from '@rsuite/icons/Plus';
import useGlobalToaster from '../../hooks/useGlobalToaster';
import useGlobalLoader from '../../hooks/useGlobalLoader';
import useNavigate from '../../hooks/useNavigate';
import { fakeRenderCell } from './utils/helpers';

const Calendar = () => {
    const [, , navigateTo] = useNavigate();

    const agenda = useSelector((state) => state?.agenda);
    const {
        error,
        loading,
    } = agenda || {};

    const [pushNotification] = useGlobalToaster();
    const [setLoader] = useGlobalLoader();

    useEffect(() => {
        if (!error) {
            return;
        }

        pushNotification(error, 'error', 'Error');
    }, [error]);

    useEffect(() => {
        setLoader(loading);
    }, [loading]);

    const handleCreate = () => {
        navigateTo('/agenda/create');
    };

    const handleEdit = (id) => {
        navigateTo(typeof id === 'string' ? `agenda/${id}` : '404');
    };

    return (
        <Grid>
            <Row>
                <Col xs={24}>
                    <Row>
                        <h2 className="calendar-title">Agenda</h2>
                        <Col xsOffset={19} mdOffset={22}>
                            <CommonButton Icon={() => <PlusIcon />} onClick={handleCreate} color="blue" appearance="primary" text="Nueva Cita" />
                        </Col>
                    </Row>
                    <Row className="calendar-container">
                        <CommonAgenda bordered renderCell={(date) => fakeRenderCell(date, handleEdit)} />
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
};

export default Calendar;
