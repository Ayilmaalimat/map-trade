import React, {useEffect, useState} from 'react'
import './Map.css'
import AnyChart from "anychart-react";
import anychart from 'anychart'
import {pointSorter} from "../../utils/pointSorter";
import {connect} from "react-redux";
import DoughnutChart from "../Charts/Doughnut";
import {arrowRightSVG} from "../../assets";
 class Map extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             points: [
                 {
                     fromId: 2,
                     toId: 6,
                     product: 1,
                     year: 2021,
                     points: {
                         points: [42.614290, 76.833688, 42.844110, 74.558424],
                         from: 'Иссык-кульская область',
                         to: 'Чуйская область',
                         product: 'Говядина',
                         value: '$200k'
                     }
                 },
                 {
                     fromId: 2,
                     toId: 5,
                     product: 1,
                     year: 2021,
                     points: {
                         points: [42.614290, 76.833688, 42.485620, 72.122352],
                         from: 'Иссык-кульская область',
                         to: 'Таласская область',
                         product: 'Говядина',
                         value: '$150k',
                         curvature: 0.50,
                     }
                 },
                 {
                     fromId: 5,
                     toId: 2,
                     product: 2,
                     year: 2021,
                     points: {
                         points: [42.485620, 72.122352, 42.614290, 76.833688],
                         from: 'Таласская область',
                         to: 'Иссык-кульская область',
                         curvature: -0.30,
                         product: 'Баранина',
                         value: '$142k'
                     }
                 },
                 {
                     fromId: 4,
                     toId: 5,
                     product: 3,
                     year: 2021,
                     points: {
                         points: [40.386513, 72.992115, 42.485620, 72.122352],
                         from: 'Ошская область',
                         to: 'Таласская область',
                         product: 'Лук',
                         value: '$156k'
                     }
                 },
                 {
                     fromId: 6,
                     toId: 3,
                     product: 4,
                     year: 2021,
                     points: {
                         points: [42.844110, 74.558424, 41.356819, 75.988367],
                         from: 'Чуйская область',
                         to: 'Нарынская область',
                         product: 'Помидоры',
                         value: '$100k'
                     }
                 },
                 {
                     fromId: 4,
                     toId: 0,
                     product: 4,
                     year: 2021,
                     points: {
                         points: [40.386513, 72.992115, 40.018286, 70.808747],
                         from: 'Ошская область',
                         to: 'Баткенская область',
                         product: 'Помидоры',
                         value: '$500k'
                     }
                 },
                 {
                     fromId: 4,
                     toId: 1,
                     product: 4,
                     year: 2021,
                     points: {
                         points: [40.386513, 72.992115, 41.723724, 71.861789],
                         from: 'Ошская область',
                         to: 'Джалал-Абадская область',
                         product: 'Помидоры',
                         curvature: -0.6,
                         value: '$200k'
                     }
                 },
                 {
                     fromId: 4,
                     toId: 3,
                     product: 0,
                     year: 2021,
                     points: {
                         points: [40.386513, 72.992115, 41.356819, 75.988367],
                         from: 'Ошская область',
                         to: 'Нарынская область',
                         product: 'Картофель',
                         curvature: -0.6,
                         value: '$210k'
                     }
                 },
                 {
                     fromId: 3,
                     toId: 5,
                     product: 5,
                     year: 2021,
                     points: {
                         points: [41.356819, 75.988367, 42.485620, 72.122352],
                         from: 'Нарынская область',
                         to: 'Таласская область',
                         curvature: -0.75,
                         product: 'Огурцы',
                         value: '$300k'
                     }
                 }
             ]
         };
     }

     // useEffect(()=>{
     //     document.querySelector('.anychart-credits').remove()
     // },[])



render()
{

    let data = anychart.data.set(pointSorter(this.state.points, {
            toId: this.props.sortToClient,
            product: this.props.sortToProduct,
            fromId: this.props.sortToSupplier,
            year: this.props.sortToYear,
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
    map.title().enabled(true).useHtml(true).padding([0, 0, 20, 0])

    map.marker(regionData).labels().format("{%name}")
    let connectorSeries = map
            .title("")
            .connector(data)
            .startSize(5)
            .endSize(0.5)
            .fill(['#F49316', '#3281FF'], 0.5, null, "round")
            .stroke(['#F49316', '#3281FF'], 0.5, null, "round")
            .curvature(0.4)

    anychart.onDocumentReady(function () {

        let tooltip = document.getElementById("tooltip");
        connectorSeries.tooltip(false)

        connectorSeries
            .listen("mouseMove", (e) => {
                tooltip.style.visibility = "visible";
                const product = document.querySelector('.tooltipData-product')
                const to = document.querySelector('.tooltipData-to')
                const from = document.querySelector('.tooltipData-from')
                const value = document.querySelector('.tooltipData-value')
                product.textContent = data.row(e.pointIndex)?.product
                to.textContent = data.row(e.pointIndex)?.to
                from.textContent =data.row(e.pointIndex)?.from
                value.textContent =data.row(e.pointIndex)?.value
                let clientX = e["offsetX"];
                    let clientY = e["offsetY"];
                    tooltip.style.left = clientX + 20 + "px";
                    tooltip.style.top = clientY + 10 + "px";
                });

        connectorSeries
            .listen("pointMouseOut", () => tooltip.style.visibility = "hidden")

    })
    connectorSeries
        .hovered()
        .markers()
        .position('100%')
        .size(20)

    connectorSeries
        .markers()
        .position('100%')
        .size(15)
        .fill('#F4CA16')


    return (
        <div className={'map-section'}>
            <div id="tooltip" className="custom-tooltip">

                <span id="tooltipData-product" className={'tooltipData-product'}></span>
                <div className="mapTooltipLocation">
                    <span id="tooltipData-from" className={'tooltipData-from'}></span>
                    <span id="tooltipData-to" className={'tooltipData-to'}></span>
                </div>
                <img className={'mapTooltip-arrowRight'} src={arrowRightSVG} alt=""/>
                <div className="tooltipInfo">
                <div className="tooltipChart">
                <DoughnutChart
                    percent={'100%'}
                    data={{
                        datasets: [{
                            data: [3500],
                            backgroundColor: '#F49316',
                        }],
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                    }}
                    options={{
                        circumference: 4.8,
                        rotation: 2.3,
                        animation: {
                            duration: 0
                        }
                    }}
                />
                </div>
                <h2 className={'tooltipData-value'}></h2>
                </div>
            </div>

            <DoughnutChart percent={'100%'} data={{
                labels: ['Весь оборот'],
                datasets: [{
                    data: [5000],
                    backgroundColor: '#3281FF',
                }],
            }}
                           options={{
                               title: {
                                   display: true,
                                   text: "Доля всей торговли"
                               },
                               circumference: 4.8,
                               rotation: 2.3
                           }}
                           style={{
                               position: 'absolute',
                               top: '10%',
                               left: '-80px',
                               width: '300px',
                               height: '300px',
                               zIndex: 10
                           }}
            />
            <AnyChart
                instance={map}
                charts={connectorSeries}
                id={'map'}
            />
        </div>
    )
}
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