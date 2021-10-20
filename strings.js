// let str1 = 'akash'
// let str2 = 'AKASH'
// if (a < b) { // true
//   console.log(a + ' is less than ' + b)
// } else if (a > b) {
//   console.log(a + ' is greater than ' + b)
// } else {
//   console.log(a + ' and ' + b + ' are equal.')
// }
// console.log(a.localeCompare(b));
// console.log(b.localeCompare(a));

// function isEqual(str1, str2)
// {
//     console.log(str1.toUpperCase());
//     console.log(str2.toUpperCase());
//     return str1.toUpperCase() === str2.toUpperCase()
// } 

// const a = isEqual(str1,str2);
// console.log(a);



// let str1 = "5+5"
// let str2 = new String("5+5");
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(eval(str1));
// console.log(eval(str2));
// console.log(eval(str2.valueOf()));


// function getFee(isMember){
//     return (isMember ? "1000Rs" : "100Rs")
// }
// console.log(getFee(true));
// console.log(getFee(false));

// function type(num){
//     return(num%2 !==0 ? "odd number" : "even number")
// }
// console.log(type(3));
// console.log(type(8));

// const a = (num) => {
//     return (num%2 !== 0 ? "odd" : "even")
// }
// console.log(a(3));
// console.log(a(8));


// let str1 = 'akash g'
// let str2 = 'AKASH'
// const b = (str1,str2) =>{
//     return str1.toUpperCase() === str2.toUpperCase() 
// }
// console.log(b(str1,str2));

let obj = {
    a:"Akash",
    b:2,
    c:["akash","akash1","akash2"],
    d:{
        a:23,
        b:"AKASH"
    }
}

let a= Object.keys(obj);
console.log(a);
let b= Object.values(obj);
console.log(b);
let c= Object.entries(obj);
console.log(c);