import React from 'react'
import Sort from "./components/Sort/Sort";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import './App.css'

const App = props =>{
    return(
        <div>
            <Header />
            <Sort />
            <Map />
        </div>
    )
}
export default App