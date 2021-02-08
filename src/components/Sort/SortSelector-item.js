import React from 'react'


const SortSelectorItem = props =>{
    return(
        <div onClick={()=>props.handleClickItem(props.id,props.name,props.dataIndex)}>{props.name}</div>
    )
}
export default SortSelectorItem