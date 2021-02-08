import React, {useState} from 'react'
import SortItem from "./Sort-item";
import {sortConfig} from "./sortConfig";
import './Sort.css'
import {sortDataConfig} from "./sortDataConfig";


const Sort = props =>{
    const [data,setData] = useState(sortDataConfig)
    const objectKeys = Object.keys(sortDataConfig)
    const elements = sortConfig.map((item,index)=>{
        if(item.dataIndex === objectKeys[index]) {
            return (
                <SortItem key={index} name={item.name} defaultTitle={item.defaultTitle} dataIndex={item.dataIndex} data={data[objectKeys[index]]}/>
            )
        }
    })
    return(
        <section className="sort-section">
            {elements}
        </section>
    )
}

export default Sort