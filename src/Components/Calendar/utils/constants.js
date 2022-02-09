/* eslint-disable import/prefer-default-export */

import moment from 'moment';

moment.locale('es-mx');

export const EVENTS = [
    {
        id: 'asd2',
        title: 'Alison',
        date: moment().add(1, 'days').format('L'),
        hour: moment().add(3, 'hours').format('LT'),
        color: 'yellow',
    },
    {
        id: 'asdn',
        title: 'Luna',
        date: moment().add(1, 'days').format('L'),
        hour: moment().add(3, 'hours').format('LT'),
        color: 'orange',
    },
    {
        id: 'asdm',
        title: 'Dylan Herrejon',
        date: moment().add(2, 'days').format('L'),
        hour: moment().subtract(3, 'hours').format('LT'),
        color: 'green',
    },
    {
        id: 'asdp',
        title: 'Christian',
        date: moment().add(3, 'days').format('L'),
        hour: moment().subtract(4, 'days').add(3, 'hours').format('LT'),
        color: 'cyan',
    },
    {
        id: 'asdl',
        title: 'Chabela',
        date: moment().subtract(1, 'week').format('L'),
        hour: moment().add(3, 'hours').format('LT'),
        color: 'orange',
    },
    {
        id: 'asda',
        title: 'Diente Doctor',
        date: moment().subtract(1, 'days').format('L'),
        hour: moment().add(1, 'hours').format('LT'),
        color: 'violet',
    },
    {
        id: 'asd1',
        title: 'Caries',
        date: moment().add(1, 'days').format('L'),
        hour: moment().subtract(3, 'hours').format('LT'),
        color: 'blue',
    },
    {
        id: 'asdj',
        title: 'Brackets',
        day: moment().add(1, 'days').format('L'),
        hour: moment().add(4, 'days').add(3, 'hours').format('LT'),
        color: 'red',
    },
];
