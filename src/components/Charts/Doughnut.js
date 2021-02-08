
import React, {useState} from "react";
import {Doughnut} from "react-chartjs-2";
import './Charts.css'

const DoughnutChart = ()=>{
    const colors = ['#705482','rgba(237,59,156,.3)']
    const [data,setData] = useState( {
        labels: ['Весь оборот'],
        datasets: [{
            data: [230000],
            backgroundColor: colors[0],
            borderWidth: 1
        }],
    })

    const options = {
        title: {
            display: true,
                text: "Доля всей торговли"
        },
        circumference: 4.8,
            rotation: 2.3
    }
    return(
        <div className={'pip-line-in-map'}>
        <Doughnut
            data={data}
            options={options}
        />
        </div>
    )
}

export default DoughnutChart
