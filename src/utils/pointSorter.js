export const pointSorter = (array,sortObject)=>{
    let result =[]
    for(let i=0;i<array.length;i++) {
        if (sortObject.sortToSupplier === -1 && sortObject.sortToClient === -1 && sortObject.sortToProduct === -1 && sortObject.sortToYear === -1) {
            result.push( array[i].points)
        }
        if (array[i].toId === sortObject.sortToClient
            && array[i].fromId === sortObject.sortToSupplier
            && array[i].product === sortObject.sortToProduct
            && array[i].year === sortObject.sortToYear
        ) {
            result.push(array[i].points)
        }else if(array[i].toId === sortObject.sortToClient &&
            sortObject.sortToSupplier === -1 &&
            sortObject.sortToYear === -1 &&
            sortObject.sortToProduct === -1){
            result.push(array[i].points)
        }else if(array[i].fromId === sortObject.sortToSupplier &&
            sortObject.sortToClient === -1 &&
            sortObject.sortToYear === -1 &&
            sortObject.sortToProduct === -1){
            result.push(array[i].points)
        }else if(array[i].product === sortObject.sortToProduct &&
            sortObject.sortToClient === -1 &&
            sortObject.sortToYear === -1 &&
            sortObject.sortToSupplier === -1){
            result.push(array[i].points)
        }else if(array[i].year === sortObject.sortToYear &&
            sortObject.sortToClient === -1 &&
            sortObject.sortToSupplier === -1 &&
            sortObject.sortToProduct === -1){
            result.push(array[i].points)
        }
        // else if(array[i].year === sortObject.sortToYear  &&
        //     (sortObject.sortToClient ===-1 && sortObject.sortToProduct===-1 && sortObject.sortToSupplier===-1){
        //     result.push(array[i].points)
        // }else if(array[i].product === sortObject.sortToProduct  && sortObject.sortToClient ===-1){
        //     result.push(array[i].points)
        // }else if(array[i].fromId === sortObject.sortToSupplier  && sortObject.sortToClient ===-1){
        //     result.push(array[i].points)
        // }
    }
    return result
}