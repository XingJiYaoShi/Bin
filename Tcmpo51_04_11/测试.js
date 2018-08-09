var arr=[1,2];
const  minImgIndex = (arr) =>{
    return arr.reduce((a,b,index) =>{
        console.log(a,b,index);

    if (b<=a.val){
        a.val=b;
        a.index=index;
    }
    return a;
},{val:arr[0],index:[0]})

};
minImgIndex(arr);
