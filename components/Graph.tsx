import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
    ['Percentile', 'Number of Students'],
    [0, 4],
    [10, 35],
    [20, 10],
    [30, 30],
    [40, 20],
    [50, 50],
    [60, 33],
    [70, 55],
    [80, 70],
    [90, 20],
    [100, 6]
];

const options = {
    chart: {
        title: 'Percentile vs. Number of Students',
    },
    hAxis: {
        title: '',
        viewWindow: { min: 0, max: 100 },
        gridlines: { color: 'transparent' }, 
        baselineColor: 'transparent',
    },
    vAxis: {
        title: '',
        viewWindow: { min: 0, max: 100 },
        gridlines: { color: 'transparent' }, 
        textPosition: 'none',
        baselineColor: '#6b7280',
    },
    pointSize: 5,
    series: {
        0: { pointShape: 'circle',color:'#64748b' },
    },
    legend: { position: 'none' },
    curveType: 'function',
    backgroundColor: 'transparent'
};

const LineChart = () => {
    return (
        <div className="flex justify-center items-center h-fit bg-white">
            <div className="bg-white rounded-lg w-full h-full">
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
};

export default LineChart;
