import React, {useEffect, useState} from 'react'
import './Map.css'
import AnyChart from "anychart-react";
import anychart from 'anychart'
import {pointSorter} from "../../utils/pointSorter";
import {connect} from "react-redux";
import DoughnutChart from "../Charts/Doughnut";
const Map = props=>{
    useEffect(()=>{
        document.querySelector('.anychart-credits').remove()
    })
    const [points, setPoints] = useState([
    {fromId: 2,toId: 6,  product: 1,year: 2021, points: {points: [42.614290, 76.833688,42.844110,74.558424],from: 'Иссык-кульская область',to: 'Чуйская область',product: 'Говядина'}},
    {fromId: 2,toId: 5,  product: 1,year: 2021, points: {points: [42.614290, 76.833688,42.485620, 72.122352],from: 'Иссык-кульская область',to: 'Таласская область',product: 'Говядина',curvature: 0.50,}},
    {fromId: 5,toId: 2,  product: 2,year: 2021, points: {points:[42.485620, 72.122352,42.614290, 76.833688],from: 'Таласская область',to: 'Иссык-кульская область',curvature: -0.30,product: 'Баранина'}},
    {fromId: 4,toId: 5,  product: 3,year: 2021, points: {points:[40.386513, 72.992115,42.485620, 72.122352],from: 'Ошская область',to : 'Таласская область',product: 'Лук'}},
    {fromId: 6,toId: 3,  product: 4,year: 2021, points: {points: [42.844110,74.558424,41.356819, 75.988367], from: 'Чуйская область',to: 'Нарынская область',product: 'Помидоры'}},
    {fromId: 4,toId: 0,  product: 4,year: 2021, points: {points: [40.386513, 72.992115,40.018286, 70.808747], from: 'Ошская область',to: 'Баткенская область',product: 'Помидоры'}},
    {fromId: 4,toId: 1,  product: 4,year: 2021, points: {points: [40.386513, 72.992115,41.723724, 71.861789], from: 'Ошская область',to: 'Джалал-Абадская область',product: 'Помидоры',curvature: -0.6}},
    {fromId: 4,toId: 3,  product: 0,year: 2021, points: {points: [40.386513, 72.992115,41.356819, 75.988367], from: 'Ошская область',to: 'Нарынская область',product: 'Картофель',curvature: -0.6}},
    {fromId: 3,toId: 5,  product: 5,year: 2021, points: {points: [41.356819, 75.988367,42.485620, 72.122352], from: 'Нарынская область', to: 'Таласская область',curvature: -0.75,product: 'Огурцы'}}
    ])
    let data = anychart.data.set(pointSorter(points,{
        toId: props.sortToClient,
        product: props.sortToProduct,
        fromId: props.sortToSupplier,
        year: props.sortToYear,
    }))

    let map = anychart.map();

    let regionData = [
        {lat: 42.2, long: 77.933688, name: "Иссык-Кульская область"},
        {lat: 42.844110, long: 74, name: "Чуйская область"},
        {lat: 40.018286, long: 71.808747, name: "Баткенская область"},
        {lat: 41.356819, long: 75.288367, name: "Нарынская область"},
        {lat: 39.886513, long: 72.992115, name: "Ошская область"},
        {lat: 42.485620, long: 71.622352, name: "Таласская область"},
        {lat: 41.747177, long: 71.449557, name: "Джалал-Абадская область"},

    ];
    map.geoData('anychart.maps.kyrgyzstan');
    map.interactivity().selectionMode('none');
    map.title().enabled(true).useHtml(true).padding([0, 0, 20, 0])
    map
        .marker(regionData)
        .labels()
        .format("{%name}")

    var connectorSeries = map
        .title("")
        .connector(data)
        .startSize(4)
        .endSize(0.5)
        .fill(['#F49316', '#3281FF'], 4, null, "round")
        .stroke(['#F49316', '#3281FF'], 4, null, "round")
        .curvature(0.75)
    

    connectorSeries
        .hovered()
        .markers()
        .position('100%')
        .size(20)

    connectorSeries.tooltip().title(false);

    connectorSeries
        .markers()
        .position('100%')
        .size(15)
        .fill('#F4CA16')

    connectorSeries
        .tooltip()
        .useHtml(true)
        .padding([8, 13, 10, 13])
        .fontSize(13)
        .format(function () {
            return (
                '<span style="font-size: 12px; color: #E1E1E1">Откуда: </span>' +
                this.getData('from') +
                '<br/>' +
                '<span style="font-size: 12px; color: #E1E1E1">Куда: </span>' +
                this.getData('to') +
                '<br/>' +
                '<span style="font-size: 12px; color: #E1E1E1">Товар: </span>' +
                this.getData('product')

            );
        });

    return(
        <div className={'map-section'}>
            <DoughnutChart />
            <AnyChart
                instance={map}
                charts={connectorSeries}
                id={'map'}
            />
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        sortToSupplier: state.sort.sortToSupplier,
        sortToClient: state.sort.sortToClient,
        sortToProduct: state.sort.sortToProduct,
        sortToYear: state.sort.sortToYear
    }
}
export default connect(mapStateToProps)(Map)