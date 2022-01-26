import React from 'react';
import { bool } from 'prop-types';
import { MODAL_TITLE } from '../utils/constants';
import './Header.css';

const Header = (props) => {
    const {
        isEditing,
    } = props;

    const getModalTitle = isEditing ? MODAL_TITLE[1] : MODAL_TITLE[0];

    return (
        <h2 className="appointment-title">{getModalTitle}</h2>
    );
};

Header.defaultProps = {
    isEditing: false,
};

Header.propTypes = {
    isEditing: bool,
};

export default Header;
