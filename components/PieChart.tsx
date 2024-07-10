import React from 'react';
import { Chart } from 'react-google-charts';

interface PieChartProps {
    correctAnswers: string;
}

export function PieChart({ correctAnswers }: PieChartProps) {
    const data = [
        ['Effort', 'Amount given'],
        ['Correct', parseInt(correctAnswers)],
        ['Incorrect', 15 - parseInt(correctAnswers)],
    ];

    const options = {
        pieHole: 0.6,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none',
        slices: {
            0: { color: '#1d4ed8' },
            1: { color: '#94a3b8' },
        },
        tooltip: { trigger: 'none' },
        pieSliceBorderColor: 'none',
        pieSliceText: 'none',
    };

    return (
        <div id="donut_single" className="w-4/5 h-4/5">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width="100%"
                height="100%"
            />
        </div>
    );
}
