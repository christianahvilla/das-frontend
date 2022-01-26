import React from 'react';
import {
    arrayOf, shape, number, string,
} from 'prop-types';
import {
    Col, Grid, Panel, Row,
} from 'rsuite';
import CommonChart from 'das-ui/dist/Charts/CommonChart';
import './Charts.css';

const Chart = (props) => {
    const {
        body,
        height,
        options,
        series,
        title,
        type,
        width,
    } = props;

    return (
        <Panel shaded className="panel--chart">
            <Grid>
                <Row>
                    <Col xs={body ? 2 : 0}>
                        <p>{title}</p>
                        <h2>{body}</h2>
                    </Col>
                    <Col xs={body ? 8 : 10}>
                        <CommonChart width={body ? width : 500} series={series} height={height} options={options} type={type} />
                    </Col>
                </Row>
            </Grid>
        </Panel>
    );
};

Chart.defaultProps = {
    body: null,
    height: 250,
    title: null,
    width: 400,
};

Chart.propTypes = {
    body: string,
    height: number,
    options: shape({}).isRequired,
    series: arrayOf(shape({})).isRequired,
    title: string,
    type: string.isRequired,
    width: number,
};

export default Chart;
