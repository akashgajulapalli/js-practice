function pal(num){
    let a = 0;
    let r;
    let temp=num;
    while(num>0){
        r=num%10;
        num=parseInt(num/10);
        a=(a*10)+r;
    };
    console.log(a);
    if(temp==a){
        return true;
    }
    else{
        return false;
    }
}
const result = pal(12321);
console.log(result);