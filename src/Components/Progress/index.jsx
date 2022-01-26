import React from 'react';

import { bool, string } from 'prop-types';
import CommonProgress from 'das-ui/dist/Progress/CommonProgress';

const Progress = (props) => {
    const {
        backdrop,
        center,
        content,
        size,
        speed,
    } = props;

    return (
        <CommonProgress backdrop={backdrop} center={center} content={content} size={size} speed={speed} />
    );
};

Progress.defaultProps = {
    backdrop: true,
    center: true,
    content: 'Cargando...',
    size: 'md',
    speed: 'normal',
};

Progress.propTypes = {
    backdrop: bool,
    center: bool,
    content: string,
    size: string,
    speed: string,
};

export default Progress;
