import React from 'react';

import ChartBar from './ChartBar';


import "./Chart.css";
function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // const totalMaximum = Math.max(...dataPointValues);
    let totalMaximum = 0;
    console.log(dataPointValues)
    for (let value of dataPointValues) {
        totalMaximum += value;
    }

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} key={dataPoint.label} maxValue={totalMaximum} label={dataPoint.label} />)}
        </div>
    )
}

export default Chart