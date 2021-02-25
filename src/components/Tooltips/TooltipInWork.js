import React from 'react'
import {Tooltip} from "antd";
import './TooltipInWork.css'
import 'antd/dist/antd.css';

const TooltipInWork = props =>{
    return(
        <Tooltip title="В разработке" placement="bottomLeft" color={'#F49316'} >
            {props.children}
        </Tooltip>
        )
}

export default TooltipInWork