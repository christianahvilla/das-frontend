/* eslint-disable import/prefer-default-export */
import { Schema } from 'rsuite';
import {
    APPOINTMENT_END_ERROR, APPOINTMENT_MEDICATION_ERROR, APPOINTMENT_NOTES_ERROR, APPOINTMENT_PATTIENT_ERROR, APPOINTMENT_START_ERROR,
} from './constants';

export const model = Schema.Model({
    pattient: Schema.Types.StringType().isRequired(APPOINTMENT_PATTIENT_ERROR),
    medication: Schema.Types.StringType().isRequired(APPOINTMENT_MEDICATION_ERROR),
    start_date: Schema.Types.DateType(APPOINTMENT_START_ERROR).isRequired(APPOINTMENT_START_ERROR),
    start_hour: Schema.Types.DateType(APPOINTMENT_START_ERROR).isRequired(APPOINTMENT_START_ERROR),
    end_date: Schema.Types.DateType(APPOINTMENT_END_ERROR).isRequired(APPOINTMENT_END_ERROR),
    end_hour: Schema.Types.DateType(APPOINTMENT_END_ERROR).isRequired(APPOINTMENT_END_ERROR),
    notes: Schema.Types.StringType(APPOINTMENT_NOTES_ERROR),
});
