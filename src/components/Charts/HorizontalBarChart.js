import React from 'react'
import {HorizontalBar} from "react-chartjs-2";
import {getGradient} from "./getGradient";


const HorizontalBarChart = props=>{

    const data = {
        labels: props.data.labels,
        datasets: [
            {
                backgroundColor: getGradient(),
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
            xAxes: [{
                display: false,
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
        }
    }

    return(
        <div className={'chart-block'}>
            <h2 className={'chart__title'}>Топ 5</h2>
        <HorizontalBar
            data={data}
            options={options}
        />
        </div>
    )
}

export default HorizontalBarChart