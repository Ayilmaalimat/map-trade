import React, {useEffect, useState} from 'react'
import classNames from 'classnames'
import {withRouter} from "react-router-dom";


const ChartSortItem = props =>{
    const [clicked,setClick] = useState(false)
    const activeRoute =()=>props.history.location.pathname.indexOf(props.to) > -1
    useEffect(()=>{
        if(activeRoute()){
            return setClick(true)
        }
        return setClick(false)


    },[props.history.location.pathname])
    const classes = classNames({
        'chart-sort-item' : !clicked,
        'chart-sort-item__active' : clicked
    })
    return(
        <span key={props.id} className={ classes }
              onClick={()=>{
                  setClick(!clicked)
                  props.history.push(props.to)
              }}>{props.name}</span>
    )
}

export default withRouter(ChartSortItem)