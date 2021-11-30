import React from 'react';
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';
import Col from 'rsuite/Col';
import ImageContainer from './components/ImageContainer';
import LoginForm from './components/Form';
import './Login.css';

const Login = () => {
    return (
        <Grid fluid>
            <Row className="container">
                <Col className="container" xsHidden smHidden md={12} lg={10}>
                    <ImageContainer />
                </Col>
                <Col className="container" md={12} sm={24} lg={14}>
                    <LoginForm />
                </Col>
            </Row>
        </Grid>
    );
};

export default Login;
