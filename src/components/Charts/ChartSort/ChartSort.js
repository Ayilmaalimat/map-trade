import React, {useState} from 'react'
import ChartSortItem from "./ChartSortItem";
import {chartSortConfig} from "./ChartSortConfig";



const ChartSort = ()=>{
    const elements = chartSortConfig.map((item,index)=> <ChartSortItem key={index} name={item.name}  to={item.to} id={index}/>)
    return(
        <div className={'chart-sort'}>
            {elements}
        </div>
    )
}

export default ChartSort