import React from 'react'
import {Line} from 'react-chartjs-2';
import {getGradient} from "./getGradient";


const LineChart = props =>{
    const data = {
        labels: props.data.labels,
        datasets: [
            {
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#fff',
                borderColor: getGradient(),
                borderCapStyle: 'miter',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'bevel',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: props.data.data
            }
        ]
    };
    const options = {
        maintainAspectRatio : false,
        responsive: true,
        legend:{
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
        }
    }
        return (
            <div className={'chart-block'}>
                <h2 className={'chart__title'}>Общая прибыль</h2>
                <Line
                    data={data}
                    options={options}
                />
            </div>
        );
};

export default LineChart