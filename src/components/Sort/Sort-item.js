import React, {useState} from 'react'
import SortSelector from "./SortSelector";
import {connect} from "react-redux";
import {
    makeClientSorting,
    makeProductSorting,
    makeSupplierSorting,
    makeYearSorting
} from "../../redux/reducers/sortReducer";
import {closeSVG} from "../../assets";



const SortItem = props =>{
    const [isOpenSelector, setIsOpenSelector] = useState(false)
    const [title,setTitle] = useState(props.defaultTitle)
    const handleClickItem = (id,name,dataIndex)=>{
        setIsOpenSelector(false)
        setTitle(name)
        switch(dataIndex){
            case 'year':
                return props.makeYearSorting(id)
            case 'client':
                return props.makeClientSorting(id)
            case 'supplier':
                return props.makeSupplierSorting(id)
            case 'product':
                return props.makeProductSorting(id)
            default:
                return
        }
    }
    return(
        <div className="sort-section__export" >
        <div className="sort-section__title" >
            {props.name}</div>
    <div className="sort-section__selector" >
        <span onClick={()=>setIsOpenSelector(!isOpenSelector)}>{title}</span>
        <div className={'sort-section__delete-btn'}>
            <img src={closeSVG} alt=""
                 onClick={()=>handleClickItem(-1,props.defaultTitle,props.dataIndex)}
            />
        </div>
    </div>
            {isOpenSelector && <SortSelector dataIndex={props.dataIndex} handleClickItem = {handleClickItem} data={props.data}/>}
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        sortToSupplier: state.sort.sortToSupplier,
        sortToClient: state.sort.sortToClient,
        sortToProduct: state.sort.sortToProduct,
        sortToYear: state.sort.sortToYear
    }
}
export default connect(mapStateToProps,{makeYearSorting,makeClientSorting,makeSupplierSorting,makeProductSorting})(SortItem)