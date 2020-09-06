export const sortData = (data:any)=>{
    const sortedData =  [...data];
    sortedData.sort((a:any,b:any)=>(a.cases>b.cases?-1:1))
    return sortedData; 
}