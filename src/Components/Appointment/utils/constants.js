/* eslint-disable import/prefer-default-export */

export const INITIAL_APPOINTMENT = {
    patient: null,
    medication: null,
    start_date: null,
    start_hour: null,
    end_date: null,
    end_hour: null,
    notes: null,
};

export const APPOINTMENT_PATIENT = 'Paciente';
export const APPOINTMENT_MEDICATION = 'Tratamiento';
export const APPOINTMENT_NOTES = 'Notas';
export const APPOINTMENT_DATE = 'Fecha';
export const APPOINTMENT_HOUR = 'Hora';

export const APPOINTMENT_PATIENT_KEY = 'patient';
export const APPOINTMENT_MEDICATION_KEY = 'treatment';
export const APPOINTMENT_NOTES_KEY = 'notes';
export const APPOINTMENT_START_DATE_KEY = 'start_date';
export const APPOINTMENT_START_HOUR_KEY = 'start_hour';
export const APPOINTMENT_END_DATE_KEY = 'end_date';
export const APPOINTMENT_END_HOUR_KEY = 'end_hour';

export const APPOINTMENT_PATIENT_ERROR = 'Selecciona un paciente';
export const APPOINTMENT_MEDICATION_ERROR = 'Selecciona un tratamiento';
export const APPOINTMENT_START_ERROR = 'Selecciona una fecha de inicio';
export const APPOINTMENT_END_ERROR = 'Selecciona una fecha de termino';
export const APPOINTMENT_NOTES_ERROR = 'Es requerido';

export const MODAL_TITLE = [
    'Agendar Cita',
    'Editar Cita',
];
