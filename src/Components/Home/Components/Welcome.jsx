import React from 'react';
import {
    Col, Panel, Row,
} from 'rsuite';
import welcome from '../../../assets/welcome.png';
import './Welcome.css';

const Welcome = () => {
    return (
        <Panel bordered className="panel--welcome">
            <Row className="body--welcome">
                <Col className="title--welcome" xs={18} sm={18} md={18}>
                    <h4>Hola de nuevo</h4>
                    <p>Aquí puedes encontrar información relevante sobre estado de salud de tu consultorio</p>
                </Col>
                <Col md={4} xsHidden smHidden>
                    <img src={welcome} alt="Welcome" />
                </Col>
            </Row>
        </Panel>
    );
};

export default Welcome;
