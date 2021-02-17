import React from 'react'
import Header from "../../components/Header/Header";
import Sort from "../../components/Sort/Sort";
import Map from "../../components/Map/Map";
import ChartContainer from "../../components/Charts/ChartContainer";



const DataPage = props =>{
    return(
        <>
            <Header />
            <Sort />
            <Map />
            <ChartContainer />
        </>
    )
}

export default DataPage