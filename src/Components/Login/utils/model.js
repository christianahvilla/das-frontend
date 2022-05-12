/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Schema } from 'rsuite';
import {
    PASSWORD_REGEX_ERROR, PASSWORD_REGEX, REQUIRED_ERROR, USERNAME_ERROR,
} from './constants';

export const model = Schema.Model({
    email: Schema.Types.StringType().isEmail(USERNAME_ERROR).isRequired(REQUIRED_ERROR),
    password: Schema.Types.StringType().isRequired(REQUIRED_ERROR).addRule((value) => {
        if (!value.match(PASSWORD_REGEX)) {
            return false;
        }

        return true;
    }, PASSWORD_REGEX_ERROR),
});
