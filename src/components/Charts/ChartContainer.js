import React, {useEffect, useState} from 'react'
import HorizontalBarChart from "./HorizontalBarChart";
import CustomChart from "./CustomChart";
import './Charts.css'
import LineChart from "./LineChart";
import ChartSort from "./ChartSort/ChartSort";
import {withRouter} from "react-router-dom";

const ChartContainer = props=>{
    const tradeFlow = [
        {labels: [1, 1, 1, 1,1, 1, 1],names:['Чуйская', 'Нарынская', 'Иссык-кульская', 'Таласская', 'Ошская'], data: [20,10,40,45,50,54,100]},
        {labels: ['Чуйская', 'Нарынская', 'Иссык-кульская', 'Таласская', 'Ошская'], data: [85, 75, 70, 65, 56, 55, 40]},
        {labels: ['2017', '2018', '2019', '2020', '2021'], data: [65, 59, 80, 81, 56, 55, 40]},
    ]
    const products = [
        {labels: [1, 1, 1, 1,1, 1, 1],names:['Картофель', 'Говядина', 'Баранина', 'Лук', 'Помидоры'], data: [50,100,40,45,50,54,30]},
        {labels: ['Картофель', 'Говядина', 'Баранина', 'Лук', 'Помидоры'], data: [85, 75, 70, 65, 56]},
        {labels: ['2017', '2018', '2019', '2020', '2021'], data: [65, 59, 80, 81, 56 ]},
    ]
    const imports = [
        {labels: [1, 1, 1, 1,1, 1, 1], names:['Чуйская', 'Нарынская', 'Иссык-кульская', 'Таласская', 'Ошская'],data: [66,55,46,100,50,54,60]},
        {labels: ['Ошская', 'Нарынская', 'Таласская', 'Иссык-кульская', 'Чуйская'], data: [85, 75, 70, 65, 56, 55, 40]},
        {labels: ['2017', '2018', '2019', '2020', '2021'], data: [65, 59, 80, 81, 56, 55, 40]},
    ]
    const exports = [
        {labels: [1, 1, 1, 1,1, 1, 1],names:['Чуйская', 'Нарынская', 'Иссык-кульская', 'Таласская', 'Ошская'], data: [55,99,12,67,23,30,80]},
        {labels: ['Иссык-кульская', 'Нарынская', 'Чуйская', 'Таласская', 'Ошская'], data: [85, 75, 70, 65, 56, 55, 40]},
        {labels: ['2017', '2018', '2019', '2020', '2021'], data: [65, 59, 80, 81, 56, 55, 40]},
    ]
    console.log(props.history.location.pathname)
    const [data,setData]=useState(tradeFlow)
    useEffect(()=>{
        const route = props.history.location.pathname
        switch (route) {
            case '/trade-flow': setData(tradeFlow);break;
            case '/': setData(tradeFlow);break;
            case '/products' : setData(products);break;
            case '/client' : setData(imports);break;
            case '/provide' : setData(exports);break;
            default: setData(tradeFlow)
        }
    },[props.history.location.pathname])
    return(
        <>
            <div className={'chart-container'}>
            <ChartSort />
        <div className={'chart-container-statistic'}>
            <LineChart data={data[2]}/>
            <HorizontalBarChart data={data[1]}/>
            <CustomChart data={data[0]} title={'Быстрорастущие'} type={1}/>
            <CustomChart data={data[0]} title={'Наименеерастущие'} type={0}/>
        </div>
            </div>
            </>
    )
}

export default withRouter(ChartContainer)