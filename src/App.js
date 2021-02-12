import React from 'react'
import Sort from "./components/Sort/Sort";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import './App.css'
import LineChart from "./components/Charts/LineChart";
import ChartContainer from "./components/Charts/ChartContainer";

const App = props =>{
    return(
        <>
            <Header />
            <Sort />
            <Map />
           <ChartContainer />
        </>
    )
}
export default App