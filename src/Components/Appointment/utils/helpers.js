import * as dateFns from 'date-fns';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { INITIAL_APPOINTMENT } from './constants';

/* eslint-disable import/prefer-default-export */
export const fakeAddEvent = (value, onBegin, onSuccess, onError) => {
    try {
        onBegin();
        // throw new Error('Ocurrió un error en el servidor');
        // eslint-disable-next-line no-unreachable
        setTimeout(() => onSuccess(value), 3000);
    } catch (error) {
        onError(error);
    }
};

const getDisabledDate = (date) => {
    if (dateFns.isToday(date, new Date())) {
        return false;
    }

    return dateFns.isBefore(date, new Date());
};

const getHiddenHours = (hour) => hour < 8 || hour > 20;
const getHiddenMinutes = (minute) => minute % 15 !== 0;

/**
 * getDatePickerConfig to get configuration for datePicker
 * @param {String} format,
 * @param {String} type,
 * @param {boolean} isStart,
 * @param {startDate} string,
 * @param {endDate} string,
 * @return string
 */
export const getDatePickerConfig = (format) => {
    return {
        appearance: 'default',
        block: true,
        disabled: false,
        disabledDate: getDisabledDate,
        format,
        hideHours: getHiddenHours,
        hideMinutes: getHiddenMinutes,
        isoWeek: false,
        oneTap: false,
        plaintext: false,
        readOnly: false,
        size: 'lg',
    };
};

export const formattedValues = (values, id) => {
    const newValues = {
        ...values,
        id: id || uuidv4(),
        start_date: moment(values.start_date).format('L'),
        end_date: moment(values.end_date).format('L'),
        start_hour: moment(values.start_hour).format('HH:mm'),
        end_hour: moment(values.end_hour).format('HH:mm'),
    };

    return newValues;
};

const formatHour = (time) => {
    const defaultDate = new Date();

    defaultDate.setHours(+time[0]);
    defaultDate.setMinutes(+time[1]);

    return defaultDate;
};

const formatDate = (date) => {
    const defaultDate = new Date();

    defaultDate.setMonth((+date[0] - 1), date[1]);
    defaultDate.setFullYear(+date[2]);

    return defaultDate;
};

export const getInitialValues = (values, id) => {
    if (typeof id !== 'string' || values === null) {
        return INITIAL_APPOINTMENT;
    }

    return values;
};

export const formmatAppointmentValues = (appointment) => {
    if (typeof appointment !== 'object' || appointment === null) {
        return INITIAL_APPOINTMENT;
    }

    const startDate = formatDate(appointment.start_date.split('/'));
    const endDate = formatDate(appointment.end_date.split('/'));
    const startTime = formatHour(appointment.start_hour.split(':'));
    const endTime = formatHour(appointment.end_hour.split(':'));

    return {
        ...appointment,
        start_date: startDate,
        start_hour: startTime,
        end_date: endDate,
        end_hour: endTime,
    };
};
