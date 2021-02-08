import {SET_YEAR_SORTING,SET_SUPPLIER_SORTING,SET_PRODUCT_SORTING,SET_CLIENT_SORTING} from './types'

const initialState={
        sortToSupplier: -1,
        sortToClient: -1,
        sortToProduct: -1,
        sortToYear: -1
}
export const sortReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_YEAR_SORTING:
            return {
                ...state,
                sortToYear: action.payload
            }
        case SET_SUPPLIER_SORTING:
            return {
                ...state,
                sortToSupplier: action.payload,
            }
        case SET_PRODUCT_SORTING:
            return {
                ...state,
                sortToProduct: action.payload,
            }
        case SET_CLIENT_SORTING:
            return {
                ...state,
                sortToClient: action.payload,
            }
        default:
            return {
                ...state
        }
    }
}

export const makeYearSorting = year =>{
    return{
        type: SET_YEAR_SORTING,
        payload: year
    }
}
export const makeProductSorting = product =>{
    return{
        type: SET_PRODUCT_SORTING,
        payload: product
    }
}
export const makeSupplierSorting = supplier =>{
    return{
        type: SET_SUPPLIER_SORTING,
        payload: supplier
    }
}
export const makeClientSorting = client =>{
    return{
        type: SET_CLIENT_SORTING,
        payload: client
    }
}
