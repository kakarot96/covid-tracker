export const sortData = (data:any)=>{

    const sortedData =  [...data];
    sortedData.sort((a:any,b:any)=>{
        if(a.cases>b.cases)return -1;
        else return 1;
    })
    return sortedData;
}