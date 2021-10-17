function fact(num){
    let a=1;
    for(let i=1;i<=num; i++){
        a=a*i;
    };
    return a;
}
const result = fact(6);
console.log(result);