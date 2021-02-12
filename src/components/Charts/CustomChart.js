import React, {useState} from 'react'
import {Line} from "react-chartjs-2";
import {getGradient} from "./getGradient";


const CustomChart = props=>{

    const chartData ={
        labels: props.data.labels,
        datasets:[{
            fill: false,
            lineHeight: 0.2,
            lineTension: 0.01,
            backgroundColor: getGradient(),
            borderColor: getGradient(),
            borderCapStyle: 'miter',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'bevel',
            pointRadius: 0,
            pointBorderWidth: 0,
            data: props.data.data
        }]
    }
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        tooltips:{
            enabled: false
        },
        legend:{
            display: false
        },
        scales: {
            yAxes: [{
                display: false,
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

    const getRandomArray = ()=>{
        let result = [],resultNum
        if(props.type===1){
        while(result.length!==props.data.names.length){
                resultNum =  Math.random() * ( 100 - 1 ) + 1;
                result.push(resultNum.toFixed(1))
           }
           return result.sort().reverse()
        }
           else{
            while(result.length!==props.data.names.length) {
                resultNum = Math.random() * (1 - 20) -20;
                result.push(resultNum.toFixed(1))
                }
                return result.sort().reverse()
            }
        }
    const chartValues = getRandomArray()
const elements = props.data.names.map((item,index)=>{
    return(
        <div key={index} className={'custom-chart__item'}>
            <div>
            <span className={'custom-chart__item-id'}>{index+1}</span>
            <span className={'custom-chart__item-title'}>{item}</span>
            </div>
            <div className={'custom-chart__item-statistic'}>
            <span className={'custom-chart__item-chart'}>
                <Line data={chartData} options={options}/>
            </span>
                <span>{ chartValues[index]}%</span>
            </div>

            </div>
    )
})
    return(
        <div className={'custom-chart__block'}>
            <h2 className={'custom-chart__title'}>{props.title}</h2>
            <div className={'custom-chart__item-container'}>
                {elements}
            </div>
        </div>
    )
}

export default CustomChart