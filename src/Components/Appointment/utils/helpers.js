import * as dateFns from 'date-fns';
import moment from 'moment';

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

export const formatDate = (date) => {
    if (typeof date !== 'object' || !date) {
        return new Date();
    }

    return new Date(date);
};

export const formatHour = (startHour, isEnd = false, endHour = null) => {
    if (startHour && !isEnd) {
        return new Date(startHour);
    }

    if (endHour && isEnd) {
        return new Date(endHour);
    }

    if (!startHour && !isEnd) {
        return new Date();
    }

    if (!endHour && isEnd && startHour) {
        const hour = new Date(startHour);

        hour.setHours(hour.getHours() + 1);

        return moment(hour, 'HH:mm').toDate();
    }

    return new Date();
};

const getDisabledDate = (date) => {
    if (dateFns.isToday(date, new Date())) {
        return false;
    }

    return dateFns.isBefore(date, new Date());
};

// /**
//  * getValue to get time with current hour
//  * @param {Date} date
//  * @param {boolean} isStart
//  * * @param {String} startDate
//  * * @param {String} endDate
//  * @return string
//  */
// const getValue = (type, isStart, startDate, endDate) => {
//     if (isStart) {
//         if (type === 'date') {
//             return startDate;
//         }
//         return startDate;
//     } if (type === 'date') {
//         return endDate;
//     }

//     const hour = new Date(endDate);
//     hour.setHours(hour.getHours() + 1);
//     return hour;
// };

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
