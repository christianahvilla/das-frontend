/* eslint-disable import/prefer-default-export */
export const CHART_ENTRY = [{
    name: 'Ingresos',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
}];

export const CHART_OPTIONS_ENTRY = {
    chart: {
        height: 400,
        type: 'line',
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'straight',
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
        },
    },
    xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
};

export const CHART_EXPENSE = [{
    name: 'Ingresos',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
}];

export const CHART_OPTIONS_EXPENSE = {
    chart: {
        height: 500,
        type: 'line',
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'straight',
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
        },
    },
    xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
};

export const CHART_PATIENS = [
    {
        name: 'Ortodoncia',
        data: [10, 1, 25, 40, 49, 82, 19, 91, 148],
    },
    {
        name: 'Endodoncia',
        data: [10, 31, 3, 50, 89, 62, 99, 9, 18],
    },
    {
        name: 'Peridoncia',
        data: [10, 41, 30, 57, 29, 72, 49, 1, 140],
    },
];

export const CHART_OPTIONS_PATIENS = {
    chart: {
        height: 700,
        type: 'line',
        zoom: {
            enabled: true,
            type: 'x',
            autoScaleYaxis: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    title: {
        text: 'Tipos de pacientes',
        align: 'center',
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
        },
    },
    xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
};

export const CHART_APPOITMENTS = [
    {
        name: 'Citas',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
];

export const CHART_OPTIONS_APPOITMENTS = {
    chart: {
        height: 200,
        type: 'area',
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    title: {
        text: 'Número de citas',
        align: 'center',
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
        },
    },
    xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
};
