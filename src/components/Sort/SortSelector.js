import React from 'react'
import SortSelectorItem from "./SortSelector-item";



const SortSelector = props =>{
    const elements = props.data.map(item=>{
        return <SortSelectorItem
            dataIndex={props.dataIndex}
            key={item?.id}
            name={item.name}
            id={item.id}
            handleClickItem={props.handleClickItem}/>
    })
    return(
        <div className={'sort-selector'}>
            {elements}
        </div>
    )
}

export default SortSelector