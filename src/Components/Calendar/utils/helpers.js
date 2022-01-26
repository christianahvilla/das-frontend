/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
    Popover, Whisper,
} from 'rsuite';
import CommonBadge from 'das-ui/dist/Badge/CommonBadge';
import CommonButton from 'das-ui/dist/Button/CommonButton';
import moment from 'moment';
import { EVENT } from './constants';

moment.locale('es-mx');

/**
 * getFilteredList retur
 * @param {Date} date
 * @param {Array} list
 * @returns {Array}
 */
const getFilteredList = (date, list = []) => {
    const day = moment(date).format('L');

    const filteredList = list?.filter((event) => {
        const eventDate = moment(event.date).format('L');
        return eventDate.includes(day);
    });

    const sortedList = filteredList.sort((a, b) => {
        const formattedA = moment(`${a.date} ${a.hour}`).utc().valueOf();
        const formattedB = moment(`${b.date} ${b.hour}`).utc().valueOf();

        return formattedA - formattedB;
    });

    return sortedList;
};

/**
 * fakeRenderCell to display data on calendar
 * @param {Date} date
 * @param {function onClick({string} id) {}} onClick
 * @param {Array} list
 * @returns {React}
 */

export const fakeRenderCell = (date, onClick, list = EVENT) => {
    const filteredList = getFilteredList(date, list);
    const displayList = filteredList.filter((_item, index) => index < 1);

    if (filteredList.length) {
        const moreCount = filteredList.length - displayList.length;
        const moreItem = (
            <li>
                <Whisper
                    placement="top"
                    trigger="click"
                    speaker={(
                        <Popover>
                            {
                                filteredList.map((item) => (
                                    <div className="events-popover-container" key={item.id}>
                                        <CommonBadge color={item.color} />
                                        <CommonButton
                                            text={`${item.hour} - ${item.title}`}
                                            color={item.color}
                                            size="xs"
                                            appearance="subtle"
                                            onClick={() => onClick(item.id)}
                                        />
                                    </div>
                                ))
                            }
                        </Popover>
                    )}
                >
                    <p>
                        motrar
                        {' '}
                        {moreCount}
                        {' '}
                        más
                    </p>
                </Whisper>
            </li>
        );

        return (
            <ul className="calendar-todo-list">
                {displayList.map((item) => (
                    <li key={item.id}>
                        <CommonBadge color={item.color} />
                        <CommonButton
                            text={`${item.hour} - ${item.title}`}
                            color={item.color}
                            size="xs"
                            appearance="subtle"
                            onClick={() => onClick(item.id)}
                        />
                    </li>
                ))}
                {moreCount ? moreItem : null}
            </ul>
        );
    }

    return null;
};
