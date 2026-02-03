Array.prototype.myMap=function(callback,arg){
    let arr=[];
    for(let i=0;i<this.length;i++){
        if(i in this){
            arr[i]=callback.call(arg,this[i],i, this)
        }
    }
    return arr;
}
let number= [2,4,5,7,8,9]
const mappedData=number.myMap((item,index)=>{
    if(item){
        return item*2
    }
})
console.log(mappedData)