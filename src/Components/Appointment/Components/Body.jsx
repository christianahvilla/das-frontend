/* eslint-disable no-unused-vars */
import React from 'react';
import { func, shape } from 'prop-types';
import {
    Col, Form, Grid,
} from 'rsuite';
import CommonDatePicker from 'das-ui/dist/DatePicker/CommonDatePicker';
import CommonTextArea from 'das-ui/dist/TextArea/CommonTextArea';
import TextField from '../../TextField/TextField';
import {
    APPOINTMENT_DATE,
    APPOINTMENT_END_DATE_KEY,
    APPOINTMENT_END_HOUR_KEY,
    APPOINTMENT_HOUR,
    APPOINTMENT_MEDICATION,
    APPOINTMENT_MEDICATION_KEY,
    APPOINTMENT_NOTES,
    APPOINTMENT_NOTES_KEY,
    APPOINTMENT_PATTIENT,
    APPOINTMENT_PATTIENT_KEY,
    APPOINTMENT_START_DATE_KEY,
    APPOINTMENT_START_HOUR_KEY,
} from '../utils/constants';
import { model } from '../utils/model';
import { formatDate, formatHour, getDatePickerConfig } from '../utils/helpers';
import './Body.css';

const Body = (props) => {
    const {
        formError,
        formRef,
        setFormError,
        formValue,
        onChangeValues,
        setFormValue,
    } = props;

    const {
        start_date: startDateError,
        end_date: endDateError,
        end_hour: endHourError,
        start_hour: startHourError,
        notes: notesError,
    } = formError;

    const {
        start_date,
        start_hour,
        end_date,
        end_hour,
    } = formValue;

    // const startDate = formatDate(start_date);
    // const startHour = formatHour(start_hour);
    // const endDate = formatDate(end_date || start_date);
    // const endHour = formatHour(start_hour, true, end_hour);

    return (
        <Form
            fluid
            ref={formRef}
            onChange={setFormValue}
            formValue={formValue}
            onCheck={setFormError}
            model={model}
        >
            <TextField
                name={APPOINTMENT_PATTIENT_KEY}
                placeholder={APPOINTMENT_PATTIENT}
            />
            <TextField
                name={APPOINTMENT_MEDICATION_KEY}
                placeholder={APPOINTMENT_MEDICATION}
            />
            <Form.Group>
                <div>
                    <Grid className="appointment-date--container">
                        <Col className="appointment-date--datePicker" xs={24} sm={12}>
                            <CommonDatePicker
                                onSelect={(value) => onChangeValues(value, APPOINTMENT_START_DATE_KEY)}
                                {...getDatePickerConfig('dd-MM-yyyy')}
                                placeholder={APPOINTMENT_DATE}
                                defaultValue={start_date}
                            />
                            {startDateError && <Form.HelpText className="help-text--error">{startDateError}</Form.HelpText>}
                        </Col>
                        <Col xs={24} sm={12}>
                            <CommonDatePicker
                                onSelect={(value) => onChangeValues(value, APPOINTMENT_START_HOUR_KEY)}
                                {...getDatePickerConfig('HH:mm')}
                                placeholder={APPOINTMENT_HOUR}
                                defaultValue={start_hour}
                            />
                            {startHourError && <Form.HelpText className="help-text--error">{startHourError}</Form.HelpText>}
                        </Col>
                    </Grid>
                </div>
            </Form.Group>
            <Form.Group>
                <Grid className="appointment-date--container">
                    <Col className="appointment-date--datePicker" xs={24} sm={12}>
                        <CommonDatePicker
                            onSelect={(value) => onChangeValues(value, APPOINTMENT_END_DATE_KEY)}
                            {...getDatePickerConfig('dd-MM-yyyy')}
                            placeholder={APPOINTMENT_DATE}
                            defaultValue={end_date}
                        />
                        {endDateError && <Form.HelpText className="help-text--error">{endDateError}</Form.HelpText>}
                    </Col>
                    <Col xs={24} sm={12}>
                        <CommonDatePicker
                            onSelect={(value) => onChangeValues(value, APPOINTMENT_END_HOUR_KEY)}
                            {...getDatePickerConfig('HH:mm')}
                            placeholder={APPOINTMENT_HOUR}
                            defaultValue={end_hour}
                        />
                        {endHourError && <Form.HelpText className="help-text--error">{endHourError}</Form.HelpText>}
                    </Col>
                </Grid>
            </Form.Group>
            <Form.Group>
                <CommonTextArea
                    onSelect={(value) => onChangeValues(value, APPOINTMENT_NOTES_KEY)}
                    placeholder={APPOINTMENT_NOTES}
                    rows={5}
                />
                {notesError && <Form.HelpText className="help-text--error">{notesError}</Form.HelpText>}
            </Form.Group>
        </Form>
    );
};

Body.defaultProps = {
    formError: null,
    formRef: null,
    formValue: {},
};

Body.propTypes = {
    formError: shape({}),
    formRef: func,
    setFormError: func.isRequired,
    formValue: shape({}),
    onChangeValues: func.isRequired,
    setFormValue: func.isRequired,
};

export default Body;
