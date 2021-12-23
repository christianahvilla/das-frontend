import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import Chart from './Components/Charts';
import Welcome from './Components/Welcome';
import {
    CHART_OPTIONS_ENTRY, CHART_ENTRY, CHART_OPTIONS_EXPENSE, CHART_EXPENSE, CHART_OPTIONS_PATIENS, CHART_PATIENS, CHART_APPOITMENTS, CHART_OPTIONS_APPOITMENTS,
} from './utils/constants';

const Home = () => {
    return (
        <Grid>
            <Row>
                <Col xs={24}>
                    <Row>
                        <Welcome />
                    </Row>
                    <Row gutter={22}>
                        <Col xs={24} md={12}>
                            <Chart type="bar" title="Ingresos" body="$25, 234.00" options={CHART_OPTIONS_ENTRY} series={CHART_ENTRY} />
                        </Col>
                        <Col xs={24} md={12}>
                            <Chart type="bar" title="Egresos" body="$25, 234.00" options={CHART_OPTIONS_EXPENSE} series={CHART_EXPENSE} />
                        </Col>
                    </Row>
                    <Row gutter={22}>
                        <Col xs={24} md={12}>
                            <Chart type="line" options={CHART_OPTIONS_PATIENS} series={CHART_PATIENS} />
                        </Col>
                        <Col xs={24} md={12}>
                            <Chart type="area" options={CHART_OPTIONS_APPOITMENTS} series={CHART_APPOITMENTS} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
};

export default Home;
