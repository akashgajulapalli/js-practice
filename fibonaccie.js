// function fib(n){
//     let a=0;
//     let b=1;
//     let c;
//     let arr=[];
//     arr.push(a);
//     arr.push(b);
//     for(let i=0;i<n-2; i++){
//         c=a+b;
//         arr.push(c);
//         a=b;
//         b=c;
//     }
//     console.log(arr);
//     return arr;
// }
// const result = fib(4);
// console.log(result);


// function fib(n){
//     let c;
//     let arr=[0,1];
//     for(let i=0;i<n-2; i++){
//         c=arr[i]+arr[i+1];
//         arr.push(c);
//     }
//         return arr;
// }
// const result = fib(4);
// console.log(result);

// function fib(n){
//     let c;
//     let arr=[0,1];
//     let sum= arr[0]+arr[1];
//     for(let i=0;i<n-2; i++){
//         c=arr[i]+arr[i+1];
//         arr.push(c);
//         sum=sum+c;
//     }
//         return sum;
// }
// const result = fib(4);
// console.log(result);


function fib(n){
    let c;
    let sum = 0;
    let arr=[0,1];
    for(let i=0;i<n-2; i++){
        c=arr[i]+arr[i+1];
        arr.push(c);
    }
    for(let i =0; i<arr.length;i++)
    {
        sum+= arr[i];
    }

    return sum;
}
const result = fib(4);
console.log(result);
