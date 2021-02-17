const getAllPoints = (array)=>{
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i].points)
    }
    return result
}
const getField = (obj)=>{
    let res = []
    for(let f in obj){
        if(obj[f]!==-1) {
            res.push(f)
        }
    }
    return res
}
export const pointSorter = (array,sortObject)=>{
        let fields = getField(sortObject)
        if(fields.length===0){
           return getAllPoints(array)
        }else {
            let result = []
            let flag= []
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < fields.length; j++) {
                    if (array[i][fields[j]] === sortObject[fields[j]]) {
                        flag.push('+')
                    }
                }
                if(flag.length===fields.length){
                    result.push(array[i].points)
                    flag=[]
                }else{
                    flag=[]
                }
            }
            return result
        }

}