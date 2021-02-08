import React, {useState} from 'react'
import './Map.css'
import AnyChart from "anychart-react";
import anychart from 'anychart'
import {pointSorter} from "../../utils/pointSorter";
import {connect} from "react-redux";
import DoughnutChart from "../Charts/Doughnut";
const Map = props=>{
    const [points, setPoints] = useState([
    {toId: 6, fromId: 2, product: 1,year: 2021, points: {points: [42.614290, 76.833688,42.844110,74.558424],to: 'Чуйская область',from: 'Иссык-кульская область',product: 'Говядина'}},
    {toId: 2, fromId: 5, product: 2,year: 2021, points: {points:[42.485620, 72.122352,42.614290, 76.833688],to: 'Иссык-кульская область',from: 'Таласская область',curvature: -0.30,product: 'Баранина'}},
    {toId: 5, fromId: 4, product: 3,year: 2021, points: {points:[40.386513, 72.992115,42.485620, 72.122352],to : 'Таласская область',from: 'Ошская область',product: 'Лук'}},
    {toId: 3, fromId: 6, product: 4,year: 2021, points: {points: [42.844110,74.558424,41.356819, 75.988367], to: 'Нарынская область',from: 'Чуйская область',product: 'Помидоры'}},
    {toId: 5, fromId: 3, product: 5,year: 2021, points: {points: [41.356819, 75.988367,42.485620, 72.122352], to: 'Таласская область',from: 'Нарынская область',curvature: -0.75,product: 'Огурцы'}}
    ])
    let data = anychart.data.set(pointSorter(points,{
        sortToClient: props.sortToClient,
        sortToProduct: props.sortToProduct,
        sortToSupplier: props.sortToSupplier,
        sortToYear: props.sortToYear,
    }))


    let map = anychart.map();
    let chart1 = anychart.line([1, 2, 3]);
    chart1.bounds(0, 0, '100%', '50%');
    let chart2 = anychart.column();
    chart2.column([3, 2, 1]);
    chart2.line([3, 5, 6]);
    chart2.bounds(0, '50%', '100%', '50%');



    map.geoData('anychart.maps.kyrgyzstan');
    map.interactivity().selectionMode('none');
    map.title().enabled(true).useHtml(true).padding([0, 0, 20, 0])
    var connectorSeries = map
        .title("")
        .connector(data)
        .startSize(2)
        .endSize(1.5)
        .fill('#455a64')
        .stroke(null)
        .curvature(0.75)

    connectorSeries
        .labels()
        .enabled(true)
        .fontSize(10)
        .offsetX(3)
        .offsetY(3)
        .position('100%')
        .format('{%to}');
    connectorSeries
        .markers()
        .position('100%')
        .size(4)
        .fill('#1976d2')
        .stroke('2 #E1E1E1')
        .type('circle');
    connectorSeries
        .hovered()
        .markers()
        .position('100%')
        .size(4)
        .fill('#455a64')
        .stroke('2 #455a64')
        .type('circle');
    connectorSeries.tooltip().title(false);

    connectorSeries
        .markers()
        .position('100%')
        .size(8)
        .fill('#455a64')
        .stroke('2 #E1E1E1');

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