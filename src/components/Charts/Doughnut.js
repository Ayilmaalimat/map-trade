
import React, {useState} from "react";
import {Doughnut} from "react-chartjs-2";
import './Charts.css'

const DoughnutChart = props=>{
    return(
        <div style={props.style}>
        <Doughnut
            data={props.data}
            options={props.options}
        />
        <span className={'chart-percent'}>{props.percent}</span>
        </div>
    )
}

export default DoughnutChart
